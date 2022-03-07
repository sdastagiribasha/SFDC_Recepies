public with sharing class contactListController {
    public contactListController() {

    }
    @AuraEnabled(cacheable=true)
    public static list<contact> getContactList() {
        return [SELECT Id, Name, Title, Phone, Email, Picture__c  FROM Contact 
                     WHERE Picture__c  = null WITH SECURITY_ENFORCED LIMIT 10];
         
    }
}


    /*
    @AuraEnabled(cacheable=true)
    public  static list<sobject> getContactlist(string name) {
        string key= '%' + name +'%';
        string query ='select id,name,phone,Email from contact where name LIKE : key';
        return Database.query(query);

    }
    @AuraEnabled(cacheable=true)
    public static list<sobject> getAccountlist(string name) {
        string key = '%' + name + '%';
        string query = 'select id,name,industry from Account where name LIKE : key';
        return Database.query(query);
    }
    */

