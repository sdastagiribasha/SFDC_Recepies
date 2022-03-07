public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(Cacheable=true)
    public static list<Contact> findcontacts(string searchkey) {
        string key = '%' + searchkey + '%';
        string query = 'select id,name,title,phone,email from contact WHERE Name LIKE : key limit 10';
        return Database.query(query);
    }
}
