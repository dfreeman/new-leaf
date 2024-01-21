import { GamePhase } from '../ui/App';
import { GameState, JournalFlag, Scene } from './model';

import scene1, * as flags1 from '../content/scene-1';
import scene2, * as flags2 from '../content/scene-2';
import scene3, * as flags3 from '../content/scene-3';
import scene4, * as flags4 from '../content/scene-4';
import scene5, * as flags5 from '../content/scene-5';
import scene6, * as flags6 from '../content/scene-6';

const SAVE_KEY = 'new-leaf:v1';

export type SaveGame = {
  signature: string;
  phase: Record<string, number | string>;
  state: {
    flags: Array<number>;
    interactions: Array<number>;
  };
};

export class PersistenceStore {
  private next = 0;
  private idsByObject: Map<object, number>;
  private objectsById: Map<number, object>;
  private entities: Record<string, Set<object>>;

  public readonly scenes = [scene1, scene2, scene3, scene4, scene5, scene6];
  public readonly flags = [flags1, flags2, flags3, flags4, flags5, flags6];

  public constructor() {
    this.idsByObject = new Map();
    this.objectsById = new Map();
    this.entities = {};

    for (const flags of this.flags) {
      this.registerFlags(flags);
    }

    for (const scene of this.scenes) {
      this.registerScene(scene);
    }
  }

  public clear() {
    localStorage.removeItem(SAVE_KEY);
  }

  public save(phase: GamePhase, state: GameState) {
    const saveGame: SaveGame = {
      signature: this.computeSignature(),
      phase: this.serializePhase(phase),
      state: this.serializeState(state),
    };

    localStorage.setItem(SAVE_KEY, JSON.stringify(saveGame));
  }

  public hasSaveGame(): boolean {
    const saveGame = this.getPersistedData();
    const signatureMatches = saveGame?.signature === this.computeSignature();
    if (saveGame && !signatureMatches) {
      console.log('Discarding old save game with mismatched signature...');
    }
    return signatureMatches;
  }

  public load(): { state: GameState; phase: GamePhase } {
    const saveGame = this.getPersistedData();
    if (saveGame?.signature === this.computeSignature()) {
      return {
        phase: this.deserializePhase(saveGame.phase),
        state: this.deserializeState(saveGame.state),
      };
    } else {
      return {
        state: new GameState(),
        phase: { name: 'scene-intro', scene: this.scenes[0] },
      };
    }
  }

  private getPersistedData(): SaveGame | null {
    return JSON.parse(localStorage.getItem(SAVE_KEY) ?? 'null');
  }

  private registerScene(scene: Scene) {
    this.register('scene', scene);
    for (const area of scene.areas) {
      this.register('area', area);
      for (const interaction of area.interactions) {
        this.register('interaction', interaction);
      }
    }
  }

  private registerFlags(flags: object) {
    for (const [name, flag] of Object.entries(flags)) {
      if (name !== 'default') {
        this.register('flag', flag);
      }
    }
  }

  private computeSignature() {
    return JSON.stringify(
      Object.fromEntries(
        Object.entries(this.entities).map(([kind, entities]) => [
          kind,
          entities.size,
        ]),
      ),
    );
  }

  private deserializePhase(phase: SaveGame['phase']): GamePhase {
    return Object.fromEntries(
      Object.entries(phase).map(([key, value]) => {
        if (typeof value === 'string') {
          return [key, value];
        } else {
          return [
            key,
            this.lookupValue(value, key === 'scene' ? Scene : undefined),
          ];
        }
      }),
    ) as GamePhase;
  }

  private serializePhase(phase: GamePhase) {
    return Object.fromEntries(
      Object.entries(phase).map(([key, value]) => {
        if (typeof value === 'string') {
          return [key, value];
        } else {
          return [key, this.lookupID(value)];
        }
      }),
    );
  }

  private deserializeState(state: SaveGame['state']) {
    return new GameState(
      state.flags.map((flag) => this.lookupValue(flag, JournalFlag)),
      new Set(state.interactions.map((int) => this.lookupValue(int))),
    );
  }

  private serializeState(state: GameState) {
    return {
      flags: state.flags.map((flag) => this.lookupID(flag)),
      interactions: [...state.seenInteractions].map((int) =>
        this.lookupID(int),
      ),
    };
  }

  private lookupValue<T = unknown>(
    id: number,
    constructor?: new (...args: never[]) => T,
  ): T {
    const value = this.objectsById.get(id);
    if (value === undefined) {
      throw new Error('Missing registration for persistence entity');
    } else if (constructor && !(value instanceof constructor)) {
      throw new Error('Wrong type of value encountered during deserialization');
    } else {
      return value as T;
    }
  }

  private lookupID(value: WeakKey): number {
    const id = this.idsByObject.get(value);
    if (id !== undefined) {
      return id;
    } else {
      throw new Error('Missing registration for persistence entity');
    }
  }

  private register(kind: string, value: WeakKey) {
    if (this.idsByObject.has(value)) return;

    this.entities[kind] ??= new Set();
    this.entities[kind].add(value);

    const id = this.next++;

    this.idsByObject.set(value, id);
    this.objectsById.set(id, value);
  }
}
