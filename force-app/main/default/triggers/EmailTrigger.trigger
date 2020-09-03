/**
 * Created by apolyak on 2019. 08. 14.
 * @update ma HOLNAP
 */

trigger EmailTrigger on EmailMessage (after insert) {
    System.debug('Hello darkness my old friend, Email: ' + Trigger.new);
    //getCase(Messaging.EmailMessage());

    for(EmailMessage em : Trigger.new) {
        System.debug('\t###### em: ' + em);
        System.debug('\t####### ParentId: ' + em.ParentId);
    }

    Integer counter = 0;
    List<EmailMessage> caseEmailMessages = new List<EmailMessage>();
    for(EmailMessage em : [SELECT Id, FromAddress, ParentId, Subject FROM EmailMessage WHERE Id IN :Trigger.new  ]) {
        System.debug('\t############# EmailMessage ' + counter + ': ' + em);
        System.debug('#################################################################################################');
        for(EmailMessage triggerNewEmailMessage : Trigger.new) {
            System.debug('em.ParentId: ' + em.ParentId);
            System.debug('triggerNewEmailMessage.Id: ' + triggerNewEmailMessage.Id );
            if (em.ParentId == triggerNewEmailMessage.Id) {
                System.debug('####################### em.ParentId == Id TRUE');
                caseEmailMessages.add(em);
            } else {
                System.debug('####################### em.ParentId == Id FALSE');
            }
        }

        // increment counter for the next loop
        counter++;
    }


    //for(Case c : [SELECT EmailMessages FROM Case WHERE Trigger.New IN EmailMessages]) {
    /*for(Case c : Cases) {
        System.Debug('Voltaképp innen is látszik a táj, hiába szállított arrébb ez a vagonnal szétsúrolt sínpár | email message: ' + c);
    }*/
}