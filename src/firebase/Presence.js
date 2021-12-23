import {db} from "../config/firebase-config"

export class PresenceService {

    constructor(db) {
      console.log('let there be presence');
      this.updateOnUser().subscribe();
      this.updateOnDisconnect().subscribe();
      this.updateOnAway();
    }
  
    
    getPresence(uid: string) {
      return this.db.object(`status/${uid}`).valueChanges();
    }
  
    getUser() {
      return this.afAuth.authState.pipe(first()).toPromise();
    }
  
  
   async setPresence(status: string) {
      const user = await this.getUser();
      if (user) {
        return this.db.object(`status/${user.uid}`).update({ status, timestamp: this.timestamp });
      }
    }
  
    get timestamp() {
      return firebase.database.ServerValue.TIMESTAMP;
    }
  
    // Implement presence logic here
  
  }
  
   updateOnUser() {
      const connection = this.db.object('.info/connected').valueChanges().pipe(
        map(connected => connected ? 'online' : 'offline')
      );
  
      return this.afAuth.authState.pipe(
        switchMap(user =>  user ? connection : of('offline')),
        tap(status => this.setPresence(status))
      );
    }
  