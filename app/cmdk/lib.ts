import { cache } from "react";

import { LINKS } from "../links";

export const getLinks = cache(() => Promise.resolve({ links: LINKS }));
