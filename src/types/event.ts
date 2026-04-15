/**
 * TableMates — event types for home list
 */

import type { EventParticipant } from "./user";

export type { EventParticipant, TableMatesUser } from "./user";

export type AwardKind = "as_dor" | "spiel_des_jahres" | "diamant_dor";

export type EventCategoryId =
  | "party"
  | "family"
  | "expert"
  | "cooperative"
  | "investigation"
  | "escape"
  | "two_player"
  | "foreign_language"
  | "card_games"
  | "memory"
  | "observation_speed"
  | "pocket";

export type EventSubCategoryId =
  | "party_filler"
  | "party_bluff"
  | "party_social"
  | "family_kids"
  | "family_all_ages"
  | "family_gateway"
  | "expert_strategy"
  | "expert_heavy"
  | "expert_euro"
  | "coop_campaign"
  | "coop_one_shot"
  | "coop_deckbuilder"
  | "investigation_deduction"
  | "investigation_detective"
  | "escape_puzzle"
  | "escape_narrative"
  | "two_abstract"
  | "two_duell"
  | "foreign_english_friendly"
  | "foreign_language_dependent"
  | "cards_trick_taking"
  | "cards_deckbuilding"
  | "cards_collection"
  | "memory_light"
  | "memory_expert"
  | "speed_reaction"
  | "speed_pattern"
  | "pocket_travel"
  | "pocket_pub";

export interface BoardGameAward {
  kind: AwardKind;
  /** Award year when known (optional in mock data). */
  year?: number;
  /** e.g. As d'Or category label. */
  categoryLabel?: string;
}

export interface TableMatesEvent {
  id: string;
  /** Short label for the session / table (card title). */
  title: string;
  /** Featured game on the table. */
  gameName: string;
  categoryId: EventCategoryId;
  subCategoryId: EventSubCategoryId;
  publisher: string;
  /** Empty if not an award winner. */
  awards: BoardGameAward[];
  /** ISO 8601 date (session day). */
  date: string;
  /** Local time, 24h (e.g. "20:00"). */
  time: string;
  city: string;
  venueName?: string;
  spotsAvailable?: number;
  spotsTotal?: number;
  /**
   * Users already signed up for this table (TableMates creates the session).
   * Invariant: participants.length + spotsAvailable === spotsTotal (when both counts are set).
   */
  participants: EventParticipant[];
  /** Show a "new" / highlight chip on the card. */
  isHighlight?: boolean;
}

export const EVENT_CATEGORY_LABELS: Record<EventCategoryId, string> = {
  party: "Jeux d'ambiance",
  family: "Jeux en famille",
  expert: "Jeux experts",
  cooperative: "Jeux coopératifs",
  investigation: "Jeux d'enquête",
  escape: "Jeux escape",
  two_player: "Jeux à deux",
  foreign_language: "Jeux en langue étrangère",
  card_games: "Jeux de cartes",
  memory: "Jeux de mémoire",
  observation_speed: "Jeux d'observation et de rapidité",
  pocket: "Jeux de poche",
};

export const EVENT_SUBCATEGORY_LABELS: Record<EventSubCategoryId, string> = {
  party_filler: "Filler & rires",
  party_bluff: "Bluff & roles cachés",
  party_social: "Discussion & improvisation",
  family_kids: "À partir de 6 ans",
  family_all_ages: "Tout public",
  family_gateway: "Initiation & gateway",
  expert_strategy: "Stratégie profonde",
  expert_heavy: "Gros jeux & gestion",
  expert_euro: "Eurogame exigeant",
  coop_campaign: "Campagne & legacy",
  coop_one_shot: "Coop ponctuel",
  coop_deckbuilder: "Deckbuilding coop",
  investigation_deduction: "Déduction sociale",
  investigation_detective: "Enquête & indices",
  escape_puzzle: "Puzzles & énigmes",
  escape_narrative: "Narratif immersif",
  two_abstract: "Abstrait pur",
  two_duell: "Duel tactique",
  foreign_english_friendly: "Peu ou pas de texte",
  foreign_language_dependent: "Anglais / autre langue",
  cards_trick_taking: "Levées & plis",
  cards_deckbuilding: "Construction de deck",
  cards_collection: "Collection & combo",
  memory_light: "Mémoire accessible",
  memory_expert: "Mémoire exigeante",
  speed_reaction: "Réflexes",
  speed_pattern: "Observation & rapidité",
  pocket_travel: "Format voyage",
  pocket_pub: "Au bar / apéro",
};

export const AWARD_LABELS: Record<AwardKind, string> = {
  as_dor: "As d'Or",
  spiel_des_jahres: "Spiel des Jahres",
  diamant_dor: "Diamant d'Or",
};
