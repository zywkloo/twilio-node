/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./flexApi/V1');
import { ConfigurationListInstance } from './flexApi/v1/configuration';
import { FlexFlowListInstance } from './flexApi/v1/flexFlow';


declare class FlexApi extends Domain {
  /**
   * Initialize flex_api domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly configuration: ConfigurationListInstance;
  readonly flexFlow: FlexFlowListInstance;
  readonly v1: V1;
}

export = FlexApi;
