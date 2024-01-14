export class Character {
  public constructor() {}
}

export function interaction<K extends string>(
  def: Interaction<K>,
): Interaction<K> {
  return def;
}

export class JournalFlag {
  public constructor(public readonly description: Description) {}
}

export function flag(text: TemplateStringsArray, ...refs: Array<string>) {
  return new JournalFlag(desc(text, ...refs));
}

export class GameState {
  private entries: Array<JournalFlag> = [];
  private seenInteractions = new WeakSet<Interaction>();

  beginInteraction(interaction: Interaction) {
    this.seenInteractions.add(interaction);
  }

  isInteractionAvailable(interaction: Interaction) {
    return (
      !this.seenInteractions.has(interaction) &&
      this.isOptionAvailable(interaction.start)
    );
  }

  isOptionAvailable(option: InteractionOption) {
    return option.isAvailable?.(this) ?? true;
  }

  setFlag(flag: JournalFlag) {
    if (!this.hasFlag(flag)) {
      this.entries.push(flag);
    }
  }

  hasFlag(flag: JournalFlag) {
    return this.entries.includes(flag);
  }
}

export type Interaction<K extends string = string> = Record<
  K | 'start',
  InteractionOption<K>
>;

export type InteractionOption<K extends string = string> = {
  prompt: Description;
  description: Description;
  isAvailable?: (state: GameState) => boolean;
  setsFlags?: Array<JournalFlag>;
  continue: Array<K | 'end'>;
};

export type Area = {
  name: string;
  herePrompt: Description;
  travelPrompt: Description;
  interactions: Array<Record<string, InteractionOption>>;
};

export type Narrative = Array<{
  description: Description;
  shouldDisplay?: (state: GameState) => boolean;
  setsFlags?: Array<JournalFlag>;
}>;

export class Scene {
  public declare date: string;
  public declare art: string;
  public declare music: string;
  public declare intro: Narrative;
  public declare outro: Narrative;
  public declare areas: Array<Area>;

  public constructor(
    params: Pick<Scene, 'art' | 'music' | 'date' | 'intro' | 'outro' | 'areas'>,
  ) {
    Object.assign(this, params);
  }
}

export type Description = {
  text: ReadonlyArray<string>;
  refs: ReadonlyArray<string>;
};

export function desc(
  text: TemplateStringsArray,
  ...refs: ReadonlyArray<string>
): Description {
  return { text, refs };
}
