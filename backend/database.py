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
                    CompanyName text,
                    BranchAddress text, 
                    BranchArea text, 
                    BranchPassword text, 
                )''')
            self.cur.execute(
                '''CREATE TABLE Listings(
                    ListingID integer primary key, 
                    ListingName text, 
                    ListingDescription text, 
<<<<<<< HEAD
                    ListingPrice DECIMAL(6, 2), 
                    ListingCompanyName text, 
=======
                    ListingPrice decimal, 
                    ListingCompanyID integer not null, 
>>>>>>> 1bf538154a5b62a85f56c93fbaee4dd2dfd90af4
                    ListingBranchID integer not null, 
                    ListingImage BLOB, 
                    FOREIGN KEY(ListingBranchID) REFERENCES Branches(BranchID)
                )''')
            self.con.commit()
            return True
        except Exception as e:
            print(e)
            return e

<<<<<<< HEAD
    def insert_branch(self, branchName, companyName, branchAddress, branchArea, password):
            try:
                LOCK.acquire(True)
                ## if branch and company name exists, do not insert
                self.cur.execute("SELECT * FROM Branches WHERE CompanyName=? AND BranchName=?",(companyName, branchName,))
                if (len(self.cur.fetchall())):
                    return False
=======
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
>>>>>>> 1bf538154a5b62a85f56c93fbaee4dd2dfd90af4

                self.cur.execute("INSERT INTO Branches(BranchName, CompanyName, BranchAddress, BranchArea, BranchPassword) values (?,?,?,?,?)",
                                (branchName, companyName, branchAddress, branchArea, password,))
                self.con.commit()
                return True
            except Exception as e:
                print(e)
                return e
            finally:
                LOCK.release()

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

    def query_company_listings(self, branchID):
        try:
            LOCK.acquire(True)
            self.cur.execute("SELECT * FROM Listings WHERE BranchID=?", (branchID,))
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

