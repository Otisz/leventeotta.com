import type { DateTime } from "luxon";

export interface Journey {
  role: string;
  company: string;
  location: string;
  from: DateTime;
  to: DateTime | null;
  description: string[];
}

export interface Technology {
  name: string;
  description: string;
  icon: string;
}
