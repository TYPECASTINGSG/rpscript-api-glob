import glob from 'glob';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Match files using patterns.
 * @see {@link https://www.npmjs.com/package/glob|Glob}
 * @namespace Glob
*/
@RpsModule("glob")
export default class RPSGlob {

    /**
 * @function glob
 * @memberof Glob
 * @example
 * ;match files that starts with pa
 * glob pa*
 * @param {string} pattern pattern to be matched
 * @returns {Array} An array of strings 
 * @summary Match file given a pattern.
 * 
 * @see {@link https://www.npmjs.com/package/glob}
 * 
*/
  @rpsAction({verbName:'glob'})
  async glob (ctx:RpsContext,opts:Object, pattern:any) : Promise<string[]>{
    return glob.sync(pattern,opts);
  }

}
