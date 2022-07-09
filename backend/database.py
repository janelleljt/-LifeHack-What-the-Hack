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
                '''CREATE TABLE Companies(
                    CompanyID integer primary key, 
                    CompanyName text)''')
            self.cur.execute(
                '''CREATE TABLE Branches(
                    BranchID integer primary key, 
                    BranchName text, 
                    CompanyID integer not null,
                    BranchAddress text, 
                    BranchArea text, 
                    BranchPassword text, 
                    FORGEIGN KEY(CompanyID) REFERENCES Companies(CompanyID), 
                )''')
            self.cur.execute(
                '''CREATE TABLE Listings(
                    ListingID integer primary key, 
                    ListingName text, 
                    ListingDescription text, 
                    ListingPrice decimal, 
                    ListingCompanyID integer not null, 
                    ListingBranchID integer not null, 
                    ListingImage BLOB, 
                    FOREIGN KEY(ListingCompanyID) REFERENCES Companies(CompanyID),
                    FOREIGN KEY(ListingBranchID) REFERENCES Branches(BranchID)
                )''')
            self.con.commit()
            return True
        except Exception as e:
            print(e)
            return e

    def query_listing_area(self, branch_area):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings, Branches WHERE Listings.BranchID in (SELECT BranchID FROM Branches WHERE BranchArea=?) and Listings.ListingBranchID = Branches.BranchID", (branch_area,))
            self.con.commit()
            rows = self.cur.fetchall()
            listing_area = rows[0]
            print(listing_area)
            return listing_area
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()

    def query_price_details(self, price_range):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings WHERE ListingPrice=?", (price_range,))
            self.con.commit()
            rows = self.cur.fetchall()
            price_details = rows[0]
            print(price_details)
            return price_details
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()


