/**
 * Handles the contacts import and saves them in the store
 */
function ContactsImport(vm) {
  this.vm = vm;
  this.import = (contacts) => {
    this.contacts = contacts;
    this.vm.$once('contactsImported', () => this.success());
    this.vm.$once('contactsImportFailure', () => this.failure());
    this.vm.$once('contactsImportError', event => this.error(event.payload));

    try {
      const options = new ContactFindOptions();
      options.multiple = true;
      const fields = ['*'];
      navigator.contacts.find(fields, (contactsArray) => {
        this.contacts.contacts = contactsArray;
        this.vm.$emit('contactsImported');
      }, () => {
        this.vm.$emit('contactsImportFailure');
      }, options);
    } catch (err) {
      this.vm.$emit('contactsImportError', { payload: err });
    }

    return this;
  };

  this.on = (event, callback) => {
    this[event] = callback;
    return this;
  };
}

export default ({ Vue }) => {
  Vue.prototype.ContactsImport = ContactsImport;
};
