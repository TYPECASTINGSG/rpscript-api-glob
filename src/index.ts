/**
 * @module Glob
 */

import glob from 'glob';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("glob")
export default class RPSGlob {

  @rpsAction({verbName:'glob'})
  async glob (ctx:RpsContext,opts:Object, pattern:any) : Promise<string[]>{
    return glob.sync(pattern,opts);
  }

}
