import NodeCG from "@nodecg/types";
import { Configschema } from "types/schemas";

let nodecg: NodeCG.ServerAPI<Configschema>;

export function set(ctx: NodeCG.ServerAPI<Configschema>) {
    nodecg = ctx;
}

export function get() {
    return nodecg;
}