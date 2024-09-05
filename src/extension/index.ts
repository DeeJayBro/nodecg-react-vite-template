import type NodeCG from '@nodecg/types';
import * as nodecgContext from './util/nodecg';
import { Configschema } from 'types/schemas';

export = (nodecg: NodeCG.ServerAPI<Configschema>): void => {
    nodecgContext.set(nodecg)

    console.log("test")
    //integrate handlers via require
    //require('handler');
};