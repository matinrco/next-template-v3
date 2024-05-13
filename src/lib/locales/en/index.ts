import root from "./root";
import notFound from "./notFound";

export default {
    ...root,
    ...notFound,
} as const;
