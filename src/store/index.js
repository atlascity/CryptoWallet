import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import VuexORM from '@vuex-orm/core';

// import entities.
import Account from './wallet/entities/account';
import Address from './wallet/entities/address';
import Tx from './wallet/entities/tx';
import Wallet from './wallet/entities/wallet';
import Coin from './wallet/entities/coin';

// import modules.
import payments from './payments';
import search from './search';
import settings from './settings';
import setup from './setup';
import contacts from './contacts';

Vue.use(Vuex);

// Setup ORM database.
const database = new VuexORM.Database();

database.register(Account, {});
database.register(Address, {});
database.register(Tx, {});
database.register(Wallet, {});
database.register(Coin, {});

// Setup persistant storage.
const vuexLocal = new VuexPersistence({
  supportCircular: true,
  storage: window.localStorage,
});

/**
 * Create CryptoWallet Vuex store obj.
 * @type {Store<any>}
 */
const store = new Vuex.Store({
  modules: {
    payments,
    search,
    settings,
    setup,
    contacts,
  },
  plugins: [vuexLocal.plugin, VuexORM.install(database)],
});

export default store;
