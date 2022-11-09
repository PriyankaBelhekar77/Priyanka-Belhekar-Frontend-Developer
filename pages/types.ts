export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: Array<Missions>;
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

export type Capsules = Array<Capsule>;

interface Missions {
  name: string;
  flight: number;
}