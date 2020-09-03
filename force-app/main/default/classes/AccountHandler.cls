public class AccountHandler  {
	private static Account insertNewAccount(String nameParam){
		if (nameParam == '' || nameParam == null) return null;
		try {
			Account acc = new Account(Name = nameParam);
			//acc.Szam1__c = 500;
			//acc.Szam2__c = 991;
			// commented line
            insert acc;
			return acc;
        } catch(Exception e) {}
        //csinálok ide valamit. Vagy nem.
        return null;
	}
    public static void helloFunction() {
        System.debug('hello');
        return;
    }
}