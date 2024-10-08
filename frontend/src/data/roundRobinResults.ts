export interface MatchResult {
    matchId: string;
    college1: string;
    college2: string;
    sport: string;
    date: string;
    time: string;
    location: string;
    ref_id: string | null;
    winner: string | null; // College1, College2, or Tie
    college1_participants: string[];
    college2_participants: string[];
  }
  
  export const soccerRoundRobinResults: MatchResult[] = [
    {
      matchId: "match_001",
      college1: "Benjamin Franklin",
      college2: "Branford",
      sport: "Soccer",
      date: "2024-09-01",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref123",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["br123", "br234", "br345"],
    },
    {
      matchId: "match_002",
      college1: "Berkeley",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-01",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref456",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_003",
      college1: "Davenport",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-01",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref789",
      winner: "Davenport",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_004",
      college1: "Grace Hopper",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-01",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref101",
      winner: "Jonathan Edwards",
      college1_participants: ["gh123", "gh234", "gh345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_005",
      college1: "Branford",
      college2: "Berkeley",
      sport: "Soccer",
      date: "2024-09-02",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref124",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["bk123", "bk234", "bk345"],
    },
    {
      matchId: "match_006",
      college1: "Benjamin Franklin",
      college2: "Davenport",
      sport: "Soccer",
      date: "2024-09-02",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref457",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["dv123", "dv234", "dv345"],
    },
    {
      matchId: "match_007",
      college1: "Grace Hopper",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-02",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref478",
      winner: "Saybrook",
      college1_participants: ["gh123", "gh234", "gh345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_008",
      college1: "Timothy Dwight",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-02",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref698",
      winner: "Jonathan Edwards",
      college1_participants: ["td123", "td234", "td345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_009",
      college1: "Branford",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-03",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref201",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_010",
      college1: "Berkeley",
      college2: "Davenport",
      sport: "Soccer",
      date: "2024-09-03",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref202",
      winner: "Davenport",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["dv123", "dv234", "dv345"],
    },
    {
      matchId: "match_011",
      college1: "Benjamin Franklin",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-03",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref203",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_012",
      college1: "Timothy Dwight",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-03",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref204",
      winner: "Timothy Dwight",
      college1_participants: ["td123", "td234", "td345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_013",
      college1: "Branford",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-04",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref205",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_014",
      college1: "Berkeley",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-04",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref206",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_015",
      college1: "Benjamin Franklin",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-04",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref207",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_016",
      college1: "Davenport",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-04",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref208",
      winner: "Saybrook",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_017",
      college1: "Branford",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-05",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref209",
      winner: "Timothy Dwight",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_018",
      college1: "Berkeley",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-05",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref210",
      winner: "Grace Hopper",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_019",
      college1: "Benjamin Franklin",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-05",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref211",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_020",
      college1: "Davenport",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-05",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref212",
      winner: "Jonathan Edwards",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    // Continue until match_042...
    {
      matchId: "match_021",
      college1: "Branford",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-06",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref213",
      winner: "Saybrook",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_022",
      college1: "Benjamin Franklin",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-06",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref214",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_023",
      college1: "Berkeley",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-06",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref215",
      winner: "Timothy Dwight",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_024",
      college1: "Davenport",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-06",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref216",
      winner: "Davenport",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_025",
      college1: "Branford",
      college2: "Davenport",
      sport: "Soccer",
      date: "2024-09-07",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref217",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["dv123", "dv234", "dv345"],
    },
    {
      matchId: "match_026",
      college1: "Berkeley",
      college2: "Benjamin Franklin",
      sport: "Soccer",
      date: "2024-09-07",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref218",
      winner: "Benjamin Franklin",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["bf123", "bf234", "bf345"],
    },
    {
      matchId: "match_027",
      college1: "Grace Hopper",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-07",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref219",
      winner: "Timothy Dwight",
      college1_participants: ["gh123", "gh234", "gh345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_028",
      college1: "Saybrook",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-07",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref220",
      winner: "Saybrook",
      college1_participants: ["sy123", "sy234", "sy345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_029",
      college1: "Branford",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-08",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref221",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_030",
      college1: "Berkeley",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-08",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref222",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_031",
      college1: "Benjamin Franklin",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-08",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref223",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_032",
      college1: "Davenport",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-08",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref224",
      winner: "Davenport",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_033",
      college1: "Branford",
      college2: "Grace Hopper",
      sport: "Soccer",
      date: "2024-09-09",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref225",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["gh123", "gh234", "gh345"],
    },
    {
      matchId: "match_034",
      college1: "Berkeley",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-09",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref226",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_035",
      college1: "Benjamin Franklin",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-09",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref227",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_036",
      college1: "Davenport",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-09",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref228",
      winner: "Jonathan Edwards",
      college1_participants: ["dv123", "dv234", "dv345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_037",
      college1: "Branford",
      college2: "Jonathan Edwards",
      sport: "Soccer",
      date: "2024-09-10",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref229",
      winner: "Branford",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["je123", "je234", "je345"],
    },
    {
      matchId: "match_038",
      college1: "Berkeley",
      college2: "Saybrook",
      sport: "Soccer",
      date: "2024-09-10",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref230",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["sy123", "sy234", "sy345"],
    },
    {
      matchId: "match_039",
      college1: "Benjamin Franklin",
      college2: "Davenport",
      sport: "Soccer",
      date: "2024-09-10",
      time: "11:00",
      location: "Field 1",
      ref_id: "ref231",
      winner: "Benjamin Franklin",
      college1_participants: ["bf123", "bf234", "bf345"],
      college2_participants: ["dv123", "dv234", "dv345"],
    },
    {
      matchId: "match_040",
      college1: "Grace Hopper",
      college2: "Timothy Dwight",
      sport: "Soccer",
      date: "2024-09-10",
      time: "12:00",
      location: "Field 2",
      ref_id: "ref232",
      winner: "Timothy Dwight",
      college1_participants: ["gh123", "gh234", "gh345"],
      college2_participants: ["td123", "td234", "td345"],
    },
    {
      matchId: "match_041",
      college1: "Branford",
      college2: "Benjamin Franklin",
      sport: "Soccer",
      date: "2024-09-11",
      time: "09:00",
      location: "Field 1",
      ref_id: "ref233",
      winner: "Benjamin Franklin",
      college1_participants: ["br123", "br234", "br345"],
      college2_participants: ["bf123", "bf234", "bf345"],
    },
    {
      matchId: "match_042",
      college1: "Berkeley",
      college2: "Davenport",
      sport: "Soccer",
      date: "2024-09-11",
      time: "10:00",
      location: "Field 2",
      ref_id: "ref234",
      winner: "Berkeley",
      college1_participants: ["bk123", "bk234", "bk345"],
      college2_participants: ["dv123", "dv234", "dv345"],
    },
  ];
  