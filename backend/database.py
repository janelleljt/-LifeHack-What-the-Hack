import sqlite3
import threading

LOCK = threading.Lock()

class Database:
    
    '''
    Initializing database.db file and connecting to the file
    '''

    def __init__(self):
        self.con = sqlite3.connect('database.db', check_same_thread=False)
        self.cur = self.con.cursor()

    '''
    Initializing commit function
    '''
    def commit(self):
      self.con.commit()

    '''
    Initializing tables which only needs to be called once at the start of the program
    '''

    def create_tables(self):
        try:
            self.cur.execute(
                '''CREATE TABLE Branches(
                    BranchID integer primary key, 
                    BranchName text, 
                    CompanyName text, 
                    BranchAddress text, 
                    BranchArea text, 
                    BranchPassword text
                )''')
            self.cur.execute(
                '''CREATE TABLE Listings(
                    ListingID integer primary key, 
                    ListingName text, 
                    ListingDescription text, 
                    ListingPrice DECIMAL(6, 2), 
                    ListingCompanyName text, 
                    ListingBranchID integer not null, 
                    ListingImage BLOB, 
                    FOREIGN KEY(ListingBranchID) REFERENCES Branches(BranchID)
                )''')
            self.con.commit()
            return True
        except Exception as e:
            print(e)
            return e

    '''
    Query to insert the listing into Listings database
    Branch ID will be passed in by storing with each 
    '''
    def insert_listing(self, listingName, description, price, companyName, branchId, image):
        try:
            LOCK.acquire(True)

            self.cur.execute("INSERT INTO Listings(ListingName, ListingDescription, ListingPrice, ListingCompanyName, ListingBranchID, ListingImage) VALUES (?,?,?,?,?,?,?)", 
                (listingName, description, price, companyName, branchId, image))
            
            listingid = self.cur.last_insert_rowid()
            self.con.commit()
            return listingid
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release() 

    '''
    Query to delete listing from the listing database
    ListingID will be stored in the frontend along with other data for each listing (but probably not displayed)
    '''
    def delete_listing(self, listingId):
        try:
            LOCK.acquire(True)
            self.cur.execute("DELETE FROM Listings WHERE ListingID=?", (listingId,))
            self.con.commit()
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()
    
    '''
    Query to select all listings
    '''
    def query_all_listings(self):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings")
            rows = self.cur.fetchall()
            arrayString = []
            for row in rows:
                arrayString.append(row)
            print(arrayString)
            return arrayString
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()


    








