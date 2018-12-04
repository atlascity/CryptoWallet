import { Model } from '@vuex-orm/core';

/**
 * Wallet Entity.
 */
export default class Wallet extends Model {
  static entity = 'wallet';

  /**
   * Sets entity attributes.
   * @returns {{id: increment, account_id: attr, name: attr, wallet: attr}}
   */
  static fields() {
    return {
      id: this.increment(),
      account_id: this.attr(''),
      name: this.attr(''),
      wallet: this.attr(''),
    };
  }
}
