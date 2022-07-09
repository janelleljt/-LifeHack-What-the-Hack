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
    Search Queries
    '''
    # GOOD TO GO
    # Query to select all listings
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

    # GOOD TO GO
    def query_all_branches(self):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Branches")
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

    # GOOD TO GO
    # Query that returns listings according to branch area 
    def query_listing_area(self, branch_area):
        try:
            # select BranchID from Branches where Brancharea = ? -> array 
            # select * from Listings where ListingBranchID = array[i] 

            LOCK.acquire(True)

            self.cur.execute("SELECT BranchID from Branches WHERE BranchArea=?", (branch_area, ))
            self.con.commit()
            rows = self.cur.fetchall()
            listing_area = []

            for i in rows:
                self.cur.execute("SELECT * from Listings where ListingBranchID=?", (i[0], ))
                self.con.commit()
                listing = self.cur.fetchall()
                listing_area.append(listing)
            print(listing_area)
            return listing_area

        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()

    # GOOD TO GO
    # Query that returns listings according to branch area 
    def query_price_details(self, price_range_low:int,  price_range_high:int):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings WHERE ListingPrice BETWEEN ? and ?", (price_range_low, price_range_high, ))
            self.con.commit()
            rows = self.cur.fetchall()
            price_details = []

            for row in rows:
                price_details.append(row)
            print(price_details)
            return price_details
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()
    
    # GOOD TO GO
    # Query to return company listings of food
    def query_branch_listings(self, branchID):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings WHERE ListingBranchID=?", (branchID,))
            self.con.commit()
            rows = self.cur.fetchall()
            if not (rows):
                return
            
            listingArr = []

            for row in rows:
                listingArr.append(row)
            
            print(listingArr)
            return listingArr
            
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()

    # GOOD TO GO
    # Query to return branch ID
    def query_branchID(self, companyName, branchName):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Branches WHERE CompanyName=? AND BranchName=?", (companyName, branchName,))
            self.con.commit()
            rows = self.cur.fetchall()
            #only interested in the first row returned
            #branch ID is the first item in the row
            branch_id = rows[0][0]
            print(branch_id)
            return branch_id

        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release()

    '''
    INSERT Queries
    '''
    # GOOD TO GO
    # Insert branch into Branches database
    def insert_branch(self, branchName, companyName, branchAddress, branchArea, password):
            try:
                LOCK.acquire(True)
                ## if branch and company name exists, do not insert
                # self.cur.execute("SELECT * FROM Branches WHERE CompanyName=? AND BranchName=?",(companyName, branchName,))
                # if (len(self.cur.fetchall())):
                #     return False

                self.cur.execute("INSERT INTO Branches(BranchName, CompanyName, BranchAddress, BranchArea, BranchPassword) values (?,?,?,?,?)",
                                (branchName, companyName, branchAddress, branchArea, password,))
                self.con.commit()
                return True
            except Exception as e:
                print(e)
                return e
            finally:
                LOCK.release()
                
    # GOOD TO GO
    # Insert listing into Listings database
    def insert_listing(self, listingName, description, price, companyName, branchId, image):
        try:
            LOCK.acquire(True)

            self.cur.execute("INSERT INTO Listings(ListingName, ListingDescription, ListingPrice, ListingCompanyName, ListingBranchID, ListingImage) VALUES (?,?,?,?,?,?)", 
                (listingName, description, price, companyName, branchId, image))
            
            self.con.commit()
            return True
        except Exception as e:
            print(e)
            return e
        finally:
            LOCK.release() 

    '''
    DELETE Queries
    '''
    # Query to delete listing from the listing database
    # ListingID will be stored in the frontend along with other data for each listing (but probably not displayed)
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
