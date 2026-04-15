import type {
  AwardKind,
  BoardGameAward,
  EventCategoryId,
  EventSubCategoryId,
  TableMatesEvent,
} from "@/types/event";
import type { EventParticipant, TableMatesUser } from "@/types/user";

const CITIES = [
  "Bordeaux",
  "Paris",
  "Lyon",
  "Toulouse",
  "Nantes",
  "Lille",
  "Strasbourg",
  "Montpellier",
  "Rennes",
  "Nice",
] as const;

const VENUES = [
  "Bar à jeux Les Pions",
  "Café Ludique",
  "La Taverne du Dé",
  "Boutique LudoSphere",
  "Espace Partenaire",
  "Le Nexus",
] as const;

const SESSION_TIMES = [
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
] as const;

const MOCK_USER_POOL: TableMatesUser[] = [
  { id: "usr_001", displayName: "Camille R." },
  { id: "usr_002", displayName: "Thomas B." },
  { id: "usr_003", displayName: "Léa M." },
  { id: "usr_004", displayName: "Hugo P." },
  { id: "usr_005", displayName: "Sarah K." },
  { id: "usr_006", displayName: "Nathan D." },
  { id: "usr_007", displayName: "Emma L." },
  { id: "usr_008", displayName: "Lucas G." },
  { id: "usr_009", displayName: "Chloé V." },
  { id: "usr_010", displayName: "Maxime F." },
  { id: "usr_011", displayName: "Julie T." },
  { id: "usr_012", displayName: "Antoine C." },
  { id: "usr_013", displayName: "Manon J." },
  { id: "usr_014", displayName: "Paul H." },
  { id: "usr_015", displayName: "Clara N." },
  { id: "usr_016", displayName: "Julien A." },
  { id: "usr_017", displayName: "Inès S." },
  { id: "usr_018", displayName: "Louis W." },
  { id: "usr_019", displayName: "Zoé E." },
  { id: "usr_020", displayName: "Alexandre Y." },
  { id: "usr_021", displayName: "Élise O." },
  { id: "usr_022", displayName: "Romain I." },
  { id: "usr_023", displayName: "Margaux U." },
  { id: "usr_024", displayName: "Benjamin Q." },
  { id: "usr_025", displayName: "Laura Z." },
  { id: "usr_026", displayName: "Quentin X." },
  { id: "usr_027", displayName: "Alice C." },
  { id: "usr_028", displayName: "Gabriel M." },
  { id: "usr_029", displayName: "Sarah-Jane L." },
  { id: "usr_030", displayName: "Mathis R." },
  { id: "usr_031", displayName: "Éva P." },
  { id: "usr_032", displayName: "Noah B." },
  { id: "usr_033", displayName: "Rose D." },
  { id: "usr_034", displayName: "Ethan F." },
  { id: "usr_035", displayName: "Louna G." },
  { id: "usr_036", displayName: "Tom H." },
  { id: "usr_037", displayName: "Maëlle J." },
  { id: "usr_038", displayName: "Sacha K." },
  { id: "usr_039", displayName: "Nina V." },
  { id: "usr_040", displayName: "Raphaël T." },
].map((u) => ({ ...u, email: `${u.id}@tablemates.mock` }));

type CatalogGame = {
  name: string;
  publisher: string;
  awards?: BoardGameAward[];
};

type CatalogBlock = {
  categoryId: EventCategoryId;
  subCategoryId: EventSubCategoryId;
  games: CatalogGame[];
};

const CATALOG: CatalogBlock[] = [
  {
    categoryId: "party",
    subCategoryId: "party_filler",
    games: [
      {
        name: "Skull",
        publisher: "Space Cowboys",
        awards: [{ kind: "as_dor", year: 2011, categoryLabel: "Jeux d'ambiance" }],
      },
      { name: "Just One", publisher: "Repos Production", awards: [{ kind: "spiel_des_jahres", year: 2019 }] },
      { name: "Wavelength", publisher: "Captain Games" },
      { name: "Telestrations", publisher: "USAopoly" },
      { name: "Dixit", publisher: "Libellud", awards: [{ kind: "spiel_des_jahres", year: 2010 }] },
      { name: "Mysterium Park", publisher: "Libellud" },
    ],
  },
  {
    categoryId: "party",
    subCategoryId: "party_bluff",
    games: [
      { name: "Coup", publisher: "Indie Boards & Cards" },
      { name: "The Resistance: Avalon", publisher: "Indie Boards & Cards" },
      { name: "Secret Hitler", publisher: "Goat Wolf & Cabbage" },
      { name: "Sheriff of Nottingham", publisher: "Arcane Wonders" },
    ],
  },
  {
    categoryId: "party",
    subCategoryId: "party_social",
    games: [
      { name: "Fun Facts", publisher: "Repos Production" },
      { name: "Werewords", publisher: "Bézier Games" },
      { name: "So Clover!", publisher: "Repos Production" },
    ],
  },
  {
    categoryId: "family",
    subCategoryId: "family_all_ages",
    games: [
      { name: "Ticket to Ride", publisher: "Days of Wonder", awards: [{ kind: "spiel_des_jahres", year: 2004 }] },
      { name: "Carcassonne", publisher: "Hans im Glück", awards: [{ kind: "spiel_des_jahres", year: 2001 }] },
      {
        name: "Kingdomino",
        publisher: "Blue Orange",
        awards: [
          { kind: "as_dor", year: 2017, categoryLabel: "Enfant" },
          { kind: "spiel_des_jahres", year: 2017 },
        ],
      },
      { name: "Azul", publisher: "Next Move", awards: [{ kind: "spiel_des_jahres", year: 2018 }] },
      { name: "Splendor", publisher: "Space Cowboys" },
    ],
  },
  {
    categoryId: "family",
    subCategoryId: "family_kids",
    games: [
      { name: "Dragomino", publisher: "Blue Orange", awards: [{ kind: "as_dor", year: 2021, categoryLabel: "Enfant" }] },
      { name: "Ghost Fightin' Treasure Hunters", publisher: "Mattel" },
      { name: "My First Carcassonne", publisher: "Z-Man Games" },
    ],
  },
  {
    categoryId: "family",
    subCategoryId: "family_gateway",
    games: [
      { name: "Catan", publisher: "Kosmos", awards: [{ kind: "spiel_des_jahres", year: 1995 }] },
      { name: "7 Wonders", publisher: "Repos Production" },
      { name: "Takenoko", publisher: "Matagot" },
    ],
  },
  {
    categoryId: "expert",
    subCategoryId: "expert_euro",
    games: [
      { name: "Terraforming Mars", publisher: "FryxGames" },
      { name: "Wingspan", publisher: "Stonemaier Games", awards: [{ kind: "as_dor", year: 2019, categoryLabel: "Expert" }] },
      { name: "Brass: Birmingham", publisher: "Roxley" },
      { name: "Gaia Project", publisher: "Feuerland" },
    ],
  },
  {
    categoryId: "expert",
    subCategoryId: "expert_strategy",
    games: [
      { name: "Root", publisher: "Leder Games" },
      { name: "Scythe", publisher: "Stonemaier Games" },
      { name: "Inis", publisher: "Matagot" },
    ],
  },
  {
    categoryId: "expert",
    subCategoryId: "expert_heavy",
    games: [
      { name: "Gloomhaven", publisher: "Cephalofair", awards: [{ kind: "diamant_dor", year: 2018 }] },
      { name: "Frosthaven", publisher: "Cephalofair" },
      { name: "Ark Nova", publisher: "Feuerland", awards: [{ kind: "as_dor", year: 2022, categoryLabel: "Expert" }] },
    ],
  },
  {
    categoryId: "cooperative",
    subCategoryId: "coop_one_shot",
    games: [
      { name: "Pandemic", publisher: "Z-Man Games" },
      { name: "The Mind", publisher: "NSV", awards: [{ kind: "spiel_des_jahres", year: 2018 }] },
      { name: "Hanabi", publisher: "ABACUSSPIELE", awards: [{ kind: "spiel_des_jahres", year: 2013 }] },
      { name: "Forbidden Desert", publisher: "Gamewright" },
    ],
  },
  {
    categoryId: "cooperative",
    subCategoryId: "coop_campaign",
    games: [
      { name: "Gloomhaven: Jaws of the Lion", publisher: "Cephalofair" },
      { name: "Charterstone", publisher: "Stonemaier Games" },
    ],
  },
  {
    categoryId: "cooperative",
    subCategoryId: "coop_deckbuilder",
    games: [
      { name: "Aeon's End", publisher: "Indie Boards & Cards" },
      { name: "Marvel Champions", publisher: "Fantasy Flight Games" },
    ],
  },
  {
    categoryId: "investigation",
    subCategoryId: "investigation_deduction",
    games: [
      { name: "Codenames", publisher: "Czech Games Edition", awards: [{ kind: "spiel_des_jahres", year: 2016 }] },
      { name: "Decrypto", publisher: "Scorpion Masqué" },
      { name: "Cryptid", publisher: "Osprey Games" },
    ],
  },
  {
    categoryId: "investigation",
    subCategoryId: "investigation_detective",
    games: [
      { name: "Chronicles of Crime", publisher: "Lucky Duck Games" },
      { name: "Detective: A Modern Crime Board Game", publisher: "Portal Games" },
      { name: "Mysterium", publisher: "Libellud" },
    ],
  },
  {
    categoryId: "escape",
    subCategoryId: "escape_puzzle",
    games: [
      { name: "Unlock!", publisher: "Space Cowboys" },
      { name: "EXIT: The Game", publisher: "Kosmos" },
      { name: "Deckscape", publisher: "dV Giochi" },
    ],
  },
  {
    categoryId: "escape",
    subCategoryId: "escape_narrative",
    games: [
      { name: "T.I.M.E Stories", publisher: "Space Cowboys" },
      { name: "Adventure Games: The Dungeon", publisher: "Kosmos" },
    ],
  },
  {
    categoryId: "two_player",
    subCategoryId: "two_duell",
    games: [
      { name: "7 Wonders Duel", publisher: "Repos Production" },
      { name: "Jaipur", publisher: "Space Cowboys" },
      { name: "Patchwork", publisher: "Lookout Games" },
      { name: "Watergate", publisher: "Capstone Games" },
    ],
  },
  {
    categoryId: "two_player",
    subCategoryId: "two_abstract",
    games: [
      { name: "Onitama", publisher: "Arcane Wonders" },
      { name: "Hive", publisher: "Gen42 Games" },
      { name: "Santorini", publisher: "Roxley" },
    ],
  },
  {
    categoryId: "foreign_language",
    subCategoryId: "foreign_english_friendly",
    games: [
      { name: "Sushi Go!", publisher: "Gamewright" },
      { name: "No Thanks!", publisher: "Amigo" },
      { name: "BANG! The Dice Game", publisher: "dV Giochi" },
    ],
  },
  {
    categoryId: "foreign_language",
    subCategoryId: "foreign_language_dependent",
    games: [
      { name: "Cards Against Humanity", publisher: "Cards Against Humanity LLC" },
      { name: "Funemployed", publisher: "Ironwall Games" },
    ],
  },
  {
    categoryId: "card_games",
    subCategoryId: "cards_trick_taking",
    games: [
      { name: "The Crew", publisher: "KOSMOS", awards: [{ kind: "spiel_des_jahres", year: 2020 }] },
      { name: "Skull King", publisher: "Grandpa Beck's Games" },
      { name: "Spades & Friends", publisher: "Classic" },
    ],
  },
  {
    categoryId: "card_games",
    subCategoryId: "cards_deckbuilding",
    games: [
      { name: "Dominion", publisher: "Rio Grande Games", awards: [{ kind: "spiel_des_jahres", year: 2009 }] },
      { name: "Star Realms", publisher: "White Wizard Games" },
      { name: "Clank!", publisher: "Dire Wolf" },
    ],
  },
  {
    categoryId: "card_games",
    subCategoryId: "cards_collection",
    games: [
      { name: "Arctic", publisher: "Super Meeple" },
      { name: "Schotten Totten", publisher: "IELLO" },
    ],
  },
  {
    categoryId: "memory",
    subCategoryId: "memory_light",
    games: [
      { name: "Memory", publisher: "Ravensburger" },
      { name: "Cortex", publisher: "Captain Games" },
    ],
  },
  {
    categoryId: "memory",
    subCategoryId: "memory_expert",
    games: [
      { name: "Mémoire 44", publisher: "Days of Wonder" },
      { name: "Hanamikoji", publisher: "EmperorS4" },
    ],
  },
  {
    categoryId: "observation_speed",
    subCategoryId: "speed_pattern",
    games: [
      { name: "Spot it!", publisher: "Asmodee" },
      { name: "Dobble", publisher: "Asmodee" },
      { name: "SET", publisher: "Set Enterprises" },
    ],
  },
  {
    categoryId: "observation_speed",
    subCategoryId: "speed_reaction",
    games: [
      { name: "Jungle Speed", publisher: "Repos Production" },
      { name: "Halli Galli", publisher: "Amigo" },
      { name: "Perudo", publisher: "Asmodee" },
    ],
  },
  {
    categoryId: "pocket",
    subCategoryId: "pocket_travel",
    games: [
      { name: "Love Letter", publisher: "Z-Man Games" },
      { name: "Cockroach Poker", publisher: "Drei Magier" },
      { name: "Hanamikoji", publisher: "EmperorS4" },
    ],
  },
  {
    categoryId: "pocket",
    subCategoryId: "pocket_pub",
    games: [
      { name: "No Thanks!", publisher: "Amigo" },
      { name: "6 nimmt!", publisher: "Amigo" },
      { name: "The Game", publisher: "NSV" },
    ],
  },
];

const AWARD_KINDS: AwardKind[] = ["as_dor", "spiel_des_jahres", "diamant_dor"];

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function startOfTodayLocal(now: Date): Date {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function toISODateLocal(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function addDaysLocal(base: Date, days: number): Date {
  return new Date(base.getFullYear(), base.getMonth(), base.getDate() + days);
}

function timeToMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function futureSessionTimesForDate(dateStr: string, todayStr: string, now: Date): string[] {
  if (dateStr !== todayStr) return [...SESSION_TIMES];
  const nowMin = now.getHours() * 60 + now.getMinutes();
  return SESSION_TIMES.filter((t) => timeToMinutes(t) > nowMin);
}

function mulberry32(seed: number): () => number {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h >>> 0;
}

function pickDistinctUsers(rand: () => number, count: number): TableMatesUser[] {
  const copy = [...MOCK_USER_POOL];
  const out: TableMatesUser[] = [];
  const n = Math.min(count, copy.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(rand() * copy.length);
    out.push(copy.splice(idx, 1)[0]!);
  }
  return out;
}

function buildParticipantsAndSpots(
  rand: () => number,
  spotsTotal: number,
): { participants: EventParticipant[]; spotsAvailable: number } {
  const filled = Math.floor(rand() * (spotsTotal + 1));
  const spotsAvailable = spotsTotal - filled;
  const users = pickDistinctUsers(rand, filled);
  const participants: EventParticipant[] = users.map((user) => ({ user }));
  return { participants, spotsAvailable };
}

export type GenerateMockEventsOptions = {
  /** Number of events (default 240). */
  count?: number;
  /** Fake latency for React Query demos (default 0). */
  simulatedDelayMs?: number;
  /** Override "now" (tests). */
  now?: Date;
  /** PRNG seed; default = stable per local calendar day. */
  seed?: number;
};

/**
 * Builds mock events from the current local date: no session before today,
 * and on today only future session times (strictly after current clock).
 */
export function generateMockEvents(options: GenerateMockEventsOptions = {}): TableMatesEvent[] {
  const now = options.now ?? new Date();
  const count = options.count ?? 240;
  const todayStart = startOfTodayLocal(now);
  const todayStr = toISODateLocal(todayStart);
  const seed =
    options.seed ??
    (hashSeed(todayStr) ^ hashSeed(String(count)));
  const rand = mulberry32(seed);

  type FlatGame = {
    categoryId: EventCategoryId;
    subCategoryId: EventSubCategoryId;
    name: string;
    publisher: string;
    baseAwards: BoardGameAward[];
  };

  const flatGames: FlatGame[] = [];
  for (const block of CATALOG) {
    for (const g of block.games) {
      flatGames.push({
        categoryId: block.categoryId,
        subCategoryId: block.subCategoryId,
        name: g.name,
        publisher: g.publisher,
        baseAwards: g.awards ?? [],
      });
    }
  }

  const events: TableMatesEvent[] = [];

  for (let i = 0; i < count; i++) {
    const g = flatGames[Math.floor(rand() * flatGames.length)]!;
    const city = CITIES[Math.floor(rand() * CITIES.length)]!;
    let dayOffset = Math.floor(rand() * 56);
    let dateStr = toISODateLocal(addDaysLocal(todayStart, dayOffset));
    let timePool = futureSessionTimesForDate(dateStr, todayStr, now);

    if (timePool.length === 0) {
      dayOffset = Math.max(1, dayOffset === 0 ? 1 : dayOffset);
      dateStr = toISODateLocal(addDaysLocal(todayStart, dayOffset));
      timePool = futureSessionTimesForDate(dateStr, todayStr, now);
    }

    if (timePool.length === 0) {
      dateStr = toISODateLocal(addDaysLocal(todayStart, 1));
      timePool = futureSessionTimesForDate(dateStr, todayStr, now);
    }

    const time = (timePool.length > 0 ? timePool : [...SESSION_TIMES])[
      Math.floor(rand() * (timePool.length > 0 ? timePool.length : SESSION_TIMES.length))
    ]!;

    const spotsTotal = 3 + Math.floor(rand() * 4);
    const { participants, spotsAvailable } = buildParticipantsAndSpots(rand, spotsTotal);

    let awards = [...g.baseAwards];
    if (awards.length === 0 && rand() < 0.12) {
      const kind = AWARD_KINDS[Math.floor(rand() * AWARD_KINDS.length)]!;
      awards = [{ kind, year: 2014 + Math.floor(rand() * 12) }];
    }

    const id = `evt_${String(i + 1).padStart(4, "0")}`;
    const title =
      rand() < 0.45
        ? `Soirée ${g.name}`
        : rand() < 0.7
          ? `Table ouverte — ${city}`
          : `Découverte : ${g.name}`;

    events.push({
      id,
      title,
      gameName: g.name,
      categoryId: g.categoryId,
      subCategoryId: g.subCategoryId,
      publisher: g.publisher,
      awards,
      date: dateStr,
      time,
      city,
      venueName: VENUES[Math.floor(rand() * VENUES.length)],
      participants,
      spotsAvailable,
      spotsTotal,
      isHighlight: rand() < 0.15,
    });
  }

  events.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.time.localeCompare(b.time);
  });

  return events;
}

export async function fetchMockEvents(options: GenerateMockEventsOptions = {}): Promise<TableMatesEvent[]> {
  const ms = options.simulatedDelayMs ?? 0;
  if (ms > 0) {
    await new Promise((r) => setTimeout(r, ms));
  }
  return generateMockEvents(options);
}