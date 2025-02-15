import { IIssueTrackingData } from "../../interface/issue";
//https://randomuser.me/api/portraits/men/1.jpg
// id type must be kind of mongodb ObjectId

// Example image source: https://randomuser.me/api/portraits/men/1.jpg
export const IssueTrackingData: IIssueTrackingData[] = [
  {
    room: "Kitchen",
    type: "Leakage/Seepage",
    subType: "Leakage/Seepage",
    observation: "Observed leakage/Dampness/Seepage issue (Thermal image)",
    impact: "High",
    inspectionImg: "https://placehold.co/640",
    remarks: "Remarks",
    refCode1: "RefCode1",
    refCode2: "RefCode2",
    _id: "61d4c9e7622314009c5c3e18",
    id: 1,
  },
  {
    room: "Kitchen",
    type: "Leakage/Seepage",
    subType: "Leakage/Seepage",
    observation:
      "Observed leakage/Dampness/Seepage issue (Reference normal) image for above entry",
    impact: "NA",
    inspectionImg: "https://placehold.co/640",
    remarks: "Remarks",
    refCode1: "RefCode1",
    refCode2: "RefCode2",
    _id: "61d4c9e7622314009c5c3e19",
    id: 2,
  },
  {
    room: "Living Room",
    type: "Electric Work",
    subType: "Gap",
    observation: "Gap between switchboard and wall",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Remarks",
    refCode1: "RefCode1",
    refCode2: "RefCode2",
    _id: "61d4c9e7622314009c5c3e20",
    id: 3,
  },
  {
    room: "Bathroom",
    type: "Plumbing",
    subType: "Leakage",
    observation: "Pipe leakage observed under the sink",
    impact: "High",
    inspectionImg: "https://placehold.co/640",
    remarks: "Repair required immediately",
    refCode1: "RefCode3",
    refCode2: "RefCode4",
    _id: "61d4c9e7622314009c5c3e21",
    id: 4,
  },
  {
    room: "Bedroom",
    type: "Carpentry",
    subType: "Damage",
    observation: "Crack observed on the wooden wardrobe door",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Replace damaged section",
    refCode1: "RefCode5",
    refCode2: "RefCode6",
    _id: "61d4c9e7622314009c5c3e22",
    id: 5,
  },
  {
    room: "Living Room",
    type: "Paint Work",
    subType: "Peeling",
    observation: "Paint is peeling off near the window sill",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Repaint affected area",
    refCode1: "RefCode7",
    refCode2: "RefCode8",
    _id: "61d4c9e7622314009c5c3e23",
    id: 6,
  },
  {
    room: "Kitchen",
    type: "Electric Work",
    subType: "Short Circuit",
    observation: "Burn marks observed on the switchboard",
    impact: "High",
    inspectionImg: "https://placehold.co/640",
    remarks: "Immediate repair required",
    refCode1: "RefCode9",
    refCode2: "RefCode10",
    _id: "61d4c9e7622314009c5c3e24",
    id: 7,
  },
  {
    room: "Bathroom",
    type: "Tiling",
    subType: "Crack",
    observation: "Cracked tile observed near the shower area",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Replace damaged tile",
    refCode1: "RefCode11",
    refCode2: "RefCode12",
    _id: "61d4c9e7622314009c5c3e25",
    id: 8,
  },
  {
    room: "Living Room",
    type: "Furniture",
    subType: "Wear and Tear",
    observation: "Sofa upholstery shows significant wear",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Consider reupholstering",
    refCode1: "RefCode13",
    refCode2: "RefCode14",
    _id: "61d4c9e7622314009c5c3e26",
    id: 9,
  },
  {
    room: "Bedroom",
    type: "Windows",
    subType: "Jam",
    observation: "Window is difficult to open and close",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Lubricate or adjust hinges",
    refCode1: "RefCode15",
    refCode2: "RefCode16",
    _id: "61d4c9e7622314009c5c3e27",
    id: 10,
  },
  {
    room: "Kitchen",
    type: "Cabinetry",
    subType: "Alignment",
    observation: "Cabinet doors are misaligned",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Realign cabinet doors",
    refCode1: "RefCode17",
    refCode2: "RefCode18",
    _id: "61d4c9e7622314009c5c3e28",
    id: 11,
  },
  {
    room: "Living Room",
    type: "Flooring",
    subType: "Scratch",
    observation: "Scratches observed on wooden flooring",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Polish flooring",
    refCode1: "RefCode19",
    refCode2: "RefCode20",
    _id: "61d4c9e7622314009c5c3e29",
    id: 12,
  },
  {
    room: "Bathroom",
    type: "Ventilation",
    subType: "Blockage",
    observation: "Exhaust fan is not functioning",
    impact: "High",
    inspectionImg: "https://placehold.co/640",
    remarks: "Repair or replace exhaust fan",
    refCode1: "RefCode21",
    refCode2: "RefCode22",
    _id: "61d4c9e7622314009c5c3e30",
    id: 13,
  },
  {
    room: "Bedroom",
    type: "Lighting",
    subType: "Fault",
    observation: "Bulb is flickering",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Replace bulb",
    refCode1: "RefCode23",
    refCode2: "RefCode24",
    _id: "61d4c9e7622314009c5c3e31",
    id: 14,
  },
  {
    room: "Living Room",
    type: "Curtains",
    subType: "Loose Track",
    observation: "Curtain track is loose",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Tighten track",
    refCode1: "RefCode25",
    refCode2: "RefCode26",
    _id: "61d4c9e7622314009c5c3e32",
    id: 15,
  },
  {
    room: "Kitchen",
    type: "Plumbing",
    subType: "Clogged Sink",
    observation: "Kitchen sink drain is clogged",
    impact: "High",
    inspectionImg: "https://placehold.co/640",
    remarks: "Unclog drain",
    refCode1: "RefCode27",
    refCode2: "RefCode28",
    _id: "61d4c9e7622314009c5c3e33",
    id: 16,
  },
  {
    room: "Bathroom",
    type: "Shower",
    subType: "Low Pressure",
    observation: "Shower pressure is low",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Check and clean showerhead",
    refCode1: "RefCode29",
    refCode2: "RefCode30",
    _id: "61d4c9e7622314009c5c3e34",
    id: 17,
  },
  {
    room: "Bedroom",
    type: "Wardrobe",
    subType: "Stuck Drawer",
    observation: "Drawer in wardrobe is stuck",
    impact: "Low",
    inspectionImg: "https://placehold.co/640",
    remarks: "Fix drawer track",
    refCode1: "RefCode31",
    refCode2: "RefCode32",
    _id: "61d4c9e7622314009c5c3e35",
    id: 18,
  },
  {
    room: "Living Room",
    type: "Ceiling",
    subType: "Crack",
    observation: "Cracks observed in ceiling plaster",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Repair plaster",
    refCode1: "RefCode33",
    refCode2: "RefCode34",
    _id: "61d4c9e7622314009c5c3e36",
    id: 19,
  },
  {
    room: "Kitchen",
    type: "Storage",
    subType: "Broken Shelf",
    observation: "Broken shelf in pantry",
    impact: "Moderate",
    inspectionImg: "https://placehold.co/640",
    remarks: "Replace shelf",
    refCode1: "RefCode35",
    refCode2: "RefCode36",
    _id: "61d4c9e7622314009c5c3e37",
    id: 20,
  },
];
