import type { Course } from '../types';

export const sqlCourse: Course = {
  id: "sql-masterclass",
  categoryId: "database",
  title: "SQL Masterclass",
  description: "Complete, un-grouped SQL curriculum covering every single topic individually with rich explanations, visual sample tables, code breakdowns, and expected query output results.",
  thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80",
  modules: [
    {
        "id": "sql-mod-1-sql-home",
        "title": "SQL HOME",
        "content": "## SQL HOME & Tutorial Overview\n\n### Welcome to the Complete SQL Masterclass\nSQL (Structured Query Language) is the standard language for storing, manipulating, and retrieving data in relational database management systems.\n\nIn this comprehensive tutorial series, you will master everything from foundational database queries to advanced multi-table joins, aggregations, database constraints, stored procedures, and database administration.\n\n#### What You Will Learn in This Course:\n* How to query databases using `SELECT`, `WHERE`, `ORDER BY`, and logical operators.\n* How to insert, update, and delete database records safely.\n* How to perform complex data calculations using `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.\n* How to combine multiple relational tables using `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL JOIN`.\n* How to design relational schemas with Primary Keys, Foreign Keys, Indexes, and Constraints.\n* How to prevent SQL Injection security vulnerabilities in web applications.\n\n---\n\n#### Sample Database Preview: `Customers`\nThroughout this tutorial series, we will use structured sample database tables to illustrate real-world scenarios.\n\n| CustomerID | CustomerName | ContactName | City | Country |\n| :--- | :--- | :--- | :--- | :--- |\n| **1** | Alfreds Futterkiste | Maria Anders | Berlin | Germany |\n| **2** | Ana Trujillo Emparedados | Ana Trujillo | Mexico D.F. | Mexico |\n| **3** | Antonio Moreno Taquería | Antonio Moreno | Mexico D.F. | Mexico |\n| **4** | Around the Horn | Thomas Hardy | London | UK |\n| **5** | Berglunds snabbköp | Christina Berglund | Luleå | Sweden |\n\n> [!NOTE]\n> Every topic in this course includes dedicated explanations, real-world query examples, step-by-step code breakdowns, and expected output tables.\n"
    },
    {
        "id": "sql-mod-2-sql-intro",
        "title": "SQL Intro",
        "content": "## SQL Introduction: What is SQL & Relational Databases?\n\n### What is a Database?\nA database is an organized collection of structured data stored electronically in a computer system. Unlike spreadsheets, databases are built to handle millions of records concurrently, maintain strict data security, and process complex searches in milliseconds.\n\n### What is an RDBMS?\n**RDBMS** stands for **Relational Database Management System**. It is the software foundation for SQL databases, including:\n* **PostgreSQL**: Advanced, open-source object-relational database.\n* **MySQL**: Popular open-source web database.\n* **Microsoft SQL Server**: Enterprise database management system.\n* **SQLite**: Lightweight self-contained file database.\n* **Oracle**: High-performance enterprise database engine.\n\n---\n\n### What is SQL Used For?\nSQL is the universal language used to communicate with an RDBMS:\n1. **Execute Queries**: Retrieve specific rows and columns from tables.\n2. **Insert Data**: Create new records when users register, place orders, or post content.\n3. **Update Data**: Change existing table data when user settings or order statuses update.\n4. **Delete Data**: Purge old or deleted records.\n5. **Manage Database Objects**: Create tables, indexes, views, and stored procedures.\n\n---\n\n#### Data Structure in RDBMS Tables\nIn an RDBMS, data is organized into **Tables**. A table consists of horizontal **Rows** (records) and vertical **Columns** (fields).\n\n#### Example: `Products` Table\n| ProductID | ProductName | Category | Price | UnitsInStock |\n| :--- | :--- | :--- | :--- | :--- |\n| 101 | Wireless Mouse | Electronics | 25.50 | 150 |\n| 102 | Mechanical Keyboard | Electronics | 85.00 | 45 |\n| 103 | Ergonomic Chair | Furniture | 240.00 | 12 |\n\n> [!TIP]\n> Each column in a table has a specific data type (e.g., `ProductID` is an integer, `ProductName` is text, `Price` is a decimal number).\n"
    },
    {
        "id": "sql-mod-3-sql-syntax",
        "title": "SQL Syntax",
        "content": "## SQL Syntax Rules & Guidelines\n\n### Basic Rules of SQL Statements\nWriting clean, valid SQL queries requires following standard syntax rules:\n\n1. **SQL Keywords are Case-Insensitive**: Keywords such as `SELECT`, `FROM`, and `WHERE` can be written in lowercase or uppercase (`select` works identical to `SELECT`). However, writing keywords in **UPPERCASE** is industry best practice because it makes code readable.\n2. **Semicolon at the End of Statements**: In database administration consoles and multi-query scripts, a semicolon (`;`) marks the end of an SQL statement.\n3. **Text Values Require Single Quotes**: Text string values must be enclosed inside single quotation marks (e.g., `WHERE Country = 'Mexico'`). Numeric values do **NOT** use quotes (e.g., `WHERE Price = 25.50`).\n\n---\n\n### Example SQL Query:\n```sql\nSELECT CustomerName, City, Country\nFROM Customers\nWHERE Country = 'Germany';\n```\n\n#### Step-by-Step Breakdown:\n* `SELECT CustomerName, City, Country`: Specifies the exact column names to retrieve.\n* `FROM Customers`: Identifies the source table.\n* `WHERE Country = 'Germany'`: Filter condition applied to every row.\n\n---\n\n### Most Important SQL Commands Cheat Sheet:\n* `SELECT` - Extracts data from a database\n* `UPDATE` - Updates data in a database\n* `DELETE` - Deletes data from a database\n* `INSERT INTO` - Inserts new data into a database\n* `CREATE DATABASE` - Creates a new database\n* `ALTER DATABASE` - Modifies a database\n* `CREATE TABLE` - Creates a new table\n* `ALTER TABLE` - Modifies a table\n* `DROP TABLE` - Deletes a table\n* `CREATE INDEX` - Creates an index (search key)\n"
    },
    {
        "id": "sql-mod-4-sql-select",
        "title": "SQL Select",
        "content": "## SQL SELECT Statement\n\n### Overview\nThe `SELECT` statement is used to fetch data from a database table. The data returned is stored in a result table, called the **result-set**.\n\n---\n\n### 1. Selecting All Columns (`SELECT *`)\nIf you want to view every column in a table without writing out all column names, use the asterisk (`*`) wildcard.\n\n```sql\nSELECT * FROM Customers;\n```\n\n#### What the Database Does:\nThe database engine scans the `Customers` table and returns every row and every column defined in the schema.\n\n---\n\n### 2. Selecting Specific Columns\nSelecting only necessary columns improves performance, reduces memory usage, and speeds up data transmission over network connections.\n\n```sql\nSELECT CustomerName, City, Country FROM Customers;\n```\n\n#### Source Table: `Customers`\n| CustomerID | CustomerName | ContactName | City | Country |\n| :--- | :--- | :--- | :--- | :--- |\n| 1 | Alfreds Futterkiste | Maria Anders | Berlin | Germany |\n| 2 | Ana Trujillo Emparedados | Ana Trujillo | Mexico D.F. | Mexico |\n| 3 | Antonio Moreno Taquería | Antonio Moreno | Mexico D.F. | Mexico |\n\n#### Expected Query Output:\n| CustomerName | City | Country |\n| :--- | :--- | :--- |\n| Alfreds Futterkiste | Berlin | Germany |\n| Ana Trujillo Emparedados | Mexico D.F. | Mexico |\n| Antonio Moreno Taquería | Mexico D.F. | Mexico |\n\n> [!NOTE]\n> The order of column names in your `SELECT` clause determines the display column order in the output table.\n"
    },
    {
        "id": "sql-mod-5-sql-select-distinct",
        "title": "SQL Select Distinct",
        "content": "## SQL SELECT DISTINCT Statement\n\n### What is SELECT DISTINCT?\nIn database tables, columns often contain duplicate values. For instance, in a table of 1,000 customers, hundreds of customers might reside in the same country.\n\nThe `SELECT DISTINCT` statement is used to return only **distinct (unique) values**, automatically filtering out all duplicate rows from the query output.\n\n---\n\n### Query Example:\n```sql\nSELECT DISTINCT Country FROM Customers;\n```\n\n#### Step-by-Step Processing:\n1. The database scans the `Country` column across all rows: `['Germany', 'Mexico', 'Mexico', 'UK', 'Sweden']`.\n2. It detects that `'Mexico'` appears multiple times.\n3. It eliminates duplicates and returns only unique country names.\n\n---\n\n#### Comparison Table:\n\n#### Without DISTINCT (`SELECT Country FROM Customers`):\n| Country |\n| :--- |\n| Germany |\n| Mexico |\n| **Mexico** |\n| UK |\n| Sweden |\n\n#### With DISTINCT (`SELECT DISTINCT Country FROM Customers`):\n| Country |\n| :--- |\n| Germany |\n| Mexico |\n| UK |\n| Sweden |\n\n---\n\n### Counting Distinct Values\nYou can combine `COUNT()` with `DISTINCT` to count the total number of unique countries:\n\n```sql\nSELECT COUNT(DISTINCT Country) FROM Customers;\n```\n\n#### Expected Output:\n| COUNT(DISTINCT Country) |\n| :--- |\n| 4 |\n"
    },
    {
        "id": "sql-mod-6-sql-where",
        "title": "SQL Where",
        "content": "## SQL WHERE Clause\n\n### Overview\nThe `WHERE` clause is used to filter records. It ensures that only rows meeting specified condition criteria are returned in the result set.\n\n---\n\n### Syntax & Basic Query\n```sql\nSELECT CustomerName, City, Country\nFROM Customers\nWHERE Country = 'Mexico';\n```\n\n#### Detailed Query Breakdown:\n* `SELECT CustomerName, City, Country`: Choose columns to display.\n* `FROM Customers`: Target database table.\n* `WHERE Country = 'Mexico'`: Condition evaluated for each row. Only rows where `Country` is exactly equal to `'Mexico'` are included.\n\n#### Source Data: `Customers`\n| CustomerID | CustomerName | City | Country |\n| :--- | :--- | :--- | :--- |\n| 1 | Alfreds Futterkiste | Berlin | Germany |\n| 2 | Ana Trujillo Emparedados | Mexico D.F. | Mexico |\n| 3 | Antonio Moreno Taquería | Mexico D.F. | Mexico |\n| 4 | Around the Horn | London | UK |\n\n#### Filtered Result Output:\n| CustomerName | City | Country |\n| :--- | :--- | :--- |\n| Ana Trujillo Emparedados | Mexico D.F. | Mexico |\n| Antonio Moreno Taquería | Mexico D.F. | Mexico |\n\n---\n\n### SQL Operators Allowed in WHERE Clauses:\n| Operator | Description | Example Query |\n| :--- | :--- | :--- |\n| `=` | Equal to | `WHERE Country = 'Germany'` |\n| `>` | Greater than | `WHERE Price > 30` |\n| `<` | Less than | `WHERE Price < 20` |\n| `>=` | Greater than or equal to | `WHERE Age >= 18` |\n| `<=` | Less than or equal to | `WHERE Price <= 50` |\n| `<>` or `!=` | Not equal to | `WHERE Country <> 'USA'` |\n| `BETWEEN` | Between an inclusive range | `WHERE Price BETWEEN 10 AND 20` |\n| `LIKE` | Search for a pattern | `WHERE City LIKE 'S%'` |\n| `IN` | Specify multiple possible values | `WHERE Country IN ('Germany', 'UK')` |\n"
    },
    {
        "id": "sql-mod-7-sql-order-by",
        "title": "SQL Order By",
        "content": "## SQL ORDER BY Clause\n\n### Overview\nThe `ORDER BY` keyword is used to sort the result-set in **ascending** (`ASC`) or **descending** (`DESC`) order.\n\nBy default, `ORDER BY` sorts records in **ascending order** if no direction keyword is specified.\n\n---\n\n### 1. Ascending Order (`ASC`)\nSort customers alphabetically by `CustomerName`:\n\n```sql\nSELECT CustomerID, CustomerName, City, Country\nFROM Customers\nORDER BY CustomerName ASC;\n```\n\n#### Expected Output:\n| CustomerID | CustomerName | City | Country |\n| :--- | :--- | :--- | :--- |\n| 1 | Alfreds Futterkiste | Berlin | Germany |\n| 2 | Ana Trujillo Emparedados | Mexico D.F. | Mexico |\n| 3 | Antonio Moreno Taquería | Mexico D.F. | Mexico |\n| 4 | Around the Horn | London | UK |\n| 5 | Berglunds snabbköp | Luleå | Sweden |\n\n---\n\n### 2. Descending Order (`DESC`)\nSort customers in reverse order by `CustomerID`:\n\n```sql\nSELECT CustomerID, CustomerName, Country\nFROM Customers\nORDER BY CustomerID DESC;\n```\n\n#### Expected Output:\n| CustomerID | CustomerName | Country |\n| :--- | :--- | :--- |\n| 5 | Berglunds snabbköp | Sweden |\n| 4 | Around the Horn | UK |\n| 3 | Antonio Moreno Taquería | Mexico |\n| 2 | Ana Trujillo Emparedados | Mexico |\n| 1 | Alfreds Futterkiste | Germany |\n\n---\n\n### 3. Sorting by Multiple Columns\nSort by `Country` first (ascending). If several rows have the exact same country, sort those rows by `CustomerName` in descending order:\n\n```sql\nSELECT CustomerName, Country, City\nFROM Customers\nORDER BY Country ASC, CustomerName DESC;\n```\n"
    },
    {
        "id": "sql-mod-8-sql-and-or-not",
        "title": "SQL And, Or, Not",
        "content": "## SQL Logical Operators: AND, OR, NOT\n\n### Overview\nThe `WHERE` clause can be combined with `AND`, `OR`, and `NOT` logical operators to form complex search filters.\n\n---\n\n### 1. The `AND` Operator\nThe `AND` operator displays a row if **ALL** conditions separated by `AND` evaluate to TRUE.\n\n```sql\nSELECT * FROM Customers\nWHERE Country = 'Germany' AND City = 'Berlin';\n```\n\n#### Condition Evaluation:\n* Row 1: `Country = 'Germany'` (TRUE) AND `City = 'Berlin'` (TRUE) -> **Included**\n* Row 2: `Country = 'Germany'` (TRUE) AND `City = 'München'` (FALSE) -> **Excluded**\n\n---\n\n### 2. The `OR` Operator\nThe `OR` operator displays a row if **ANY** condition separated by `OR` evaluates to TRUE.\n\n```sql\nSELECT CustomerName, City, Country FROM Customers\nWHERE City = 'Berlin' OR City = 'London';\n```\n\n#### Expected Output:\n| CustomerName | City | Country |\n| :--- | :--- | :--- |\n| Alfreds Futterkiste | Berlin | Germany |\n| Around the Horn | London | UK |\n\n---\n\n### 3. The `NOT` Operator\nThe `NOT` operator displays a record if the condition is **NOT TRUE** (negates condition).\n\n```sql\nSELECT CustomerName, Country FROM Customers\nWHERE NOT Country = 'Germany';\n```\n\n---\n\n### Combining AND, OR & NOT with Parentheses\nUse parentheses `()` to enforce precedence when combining multiple logical operators:\n\n```sql\nSELECT * FROM Customers\nWHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'München');\n```\n"
    },
    {
        "id": "sql-mod-9-sql-insert-into",
        "title": "SQL Insert Into",
        "content": "## SQL INSERT INTO Statement\n\n### Overview\nThe `INSERT INTO` statement is used to insert new records into a database table.\n\n---\n\n### 1. Inserting Data into Specific Columns\nSpecify the column names and matching values:\n\n```sql\nINSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES ('Cardinal Health', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');\n```\n\n#### Detailed Execution Walkthrough:\n* `INSERT INTO Customers`: Identifies target table.\n* `(CustomerName, ContactName, Address, City, PostalCode, Country)`: Column list.\n* `VALUES (...)`: Values provided must match the exact data types and positional order of the specified columns.\n\n---\n\n### 2. Inserting Data into All Columns\nIf you are inserting values for **all columns** in the exact table schema order, you do not need to list column names:\n\n```sql\nINSERT INTO Customers\nVALUES (6, 'Cardinal Health', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');\n```\n\n> [!WARNING]\n> Ensure the values are ordered identically to the columns in the database table definition.\n\n---\n\n### Table State After Insertion:\n| CustomerID | CustomerName | ContactName | City | Country |\n| :--- | :--- | :--- | :--- | :--- |\n| 1 | Alfreds Futterkiste | Maria Anders | Berlin | Germany |\n| ... | ... | ... | ... | ... |\n| **6** | **Cardinal Health** | **Tom B. Erichsen** | **Stavanger** | **Norway** |\n"
    },
    {
        "id": "sql-mod-10-sql-null-values",
        "title": "SQL Null Values",
        "content": "## SQL NULL Values & IS NULL / IS NOT NULL\n\n### What is a NULL Value?\nA field with a `NULL` value is a field with **no value**. If a field in a table is optional, it is possible to insert a record or update a record without adding a value to this field. Then, the field is saved with a `NULL` value.\n\n> [!IMPORTANT]\n> **NULL is NOT Zero or Empty String**: A `NULL` value is different from a zero value or a field that contains spaces. `NULL` means data is unknown, missing, or inapplicable.\n\n---\n\n### Testing for NULL Values (`IS NULL`)\nYou cannot test for `NULL` values with comparison operators such as `=`, `<`, or `<>`. You must use `IS NULL` or `IS NOT NULL`.\n\n#### Query: Find Customers Missing an Address\n```sql\nSELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NULL;\n```\n\n---\n\n### Testing for Non-NULL Values (`IS NOT NULL`)\nQuery rows that contain a valid non-null address:\n\n```sql\nSELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NOT NULL;\n```\n"
    },
    {
        "id": "sql-mod-11-sql-update",
        "title": "SQL Update",
        "content": "## SQL UPDATE Statement\n\n### Overview\nThe `UPDATE` statement is used to modify existing records in a table.\n\n---\n\n### Syntax & Query Example\n```sql\nUPDATE Customers\nSET ContactName = 'Alfred Schmidt', City = 'Frankfurt'\nWHERE CustomerID = 1;\n```\n\n#### Detailed Execution Walkthrough:\n* `UPDATE Customers`: Target table to modify.\n* `SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'`: New values assigned to specified columns.\n* `WHERE CustomerID = 1`: Criteria identifying which specific record to update.\n\n---\n\n### Critical Safety Warning\n> [!WARNING]\n> **ALWAYS INCLUDE A WHERE CLAUSE!**\n> If you omit the `WHERE` clause in an UPDATE statement:\n> ```sql\n> UPDATE Customers SET City = 'Frankfurt'; -- DANGER!\n> ```\n> **EVERY SINGLE RECORD** in your entire database table will have its City overwritten to `Frankfurt`!\n"
    },
    {
        "id": "sql-mod-12-sql-delete",
        "title": "SQL Delete",
        "content": "## SQL DELETE Statement\n\n### Overview\nThe `DELETE` statement is used to delete existing records from a table.\n\n---\n\n### Deleting Specific Records\n```sql\nDELETE FROM Customers\nWHERE CustomerName = 'Alfreds Futterkiste';\n```\n\n#### Detailed Execution Walkthrough:\n1. The database scans the `Customers` table.\n2. It evaluates `WHERE CustomerName = 'Alfreds Futterkiste'`.\n3. The matching row is deleted permanently from storage.\n\n---\n\n### Deleting All Records\nYou can delete all rows in a table without deleting the table structure itself (columns, types, constraints remain intact):\n\n```sql\nDELETE FROM Customers;\n```\n\n> [!WARNING]\n> **Be extremely careful when executing DELETE queries!** Deleting records without a `WHERE` clause will clear your entire dataset.\n"
    },
    {
        "id": "sql-mod-13-sql-select-top",
        "title": "SQL Select Top / LIMIT",
        "content": "## SQL SELECT TOP / LIMIT Statement\n\n### Overview\nThe `SELECT TOP` (or `LIMIT`) clause is used to specify the maximum number of records to return in a query result.\n\nThis is extremely useful on large tables with millions of records to prevent slow performance or memory crashes.\n\n---\n\n### Syntax across RDBMS Engines:\n\n#### 1. PostgreSQL, MySQL & SQLite (`LIMIT`)\n```sql\nSELECT * FROM Customers\nLIMIT 3;\n```\n\n#### 2. SQL Server & MS Access (`TOP`)\n```sql\nSELECT TOP 3 * FROM Customers;\n```\n\n---\n\n### Expected Result Output (First 3 Rows):\n| CustomerID | CustomerName | ContactName | City | Country |\n| :--- | :--- | :--- | :--- | :--- |\n| 1 | Alfreds Futterkiste | Maria Anders | Berlin | Germany |\n| 2 | Ana Trujillo Emparedados | Ana Trujillo | Mexico D.F. | Mexico |\n| 3 | Antonio Moreno Taquería | Antonio Moreno | Mexico D.F. | Mexico |\n\n---\n\n### Combining TOP/LIMIT with ORDER BY\nTo get the top 3 highest priced products in a catalog:\n\n```sql\nSELECT ProductName, Price\nFROM Products\nORDER BY Price DESC\nLIMIT 3;\n```\n"
    },
    {
        "id": "sql-mod-14-sql-min-max",
        "title": "SQL Min() and Max()",
        "content": "## SQL MIN() & MAX() Functions\n\n### Overview\n* The `MIN()` function returns the smallest value of the selected column.\n* The `MAX()` function returns the largest value of the selected column.\n\n---\n\n#### Sample Table: `Products`\n| ProductID | ProductName | Price |\n| :--- | :--- | :--- |\n| 1 | Chai Tea | 18.00 |\n| 2 | Chang Beer | 19.00 |\n| 3 | Aniseed Syrup | 10.00 |\n| 4 | Chef Anton Seasoning | 22.00 |\n\n---\n\n### 1. The `MIN()` Function\nFind the price of the cheapest product:\n\n```sql\nSELECT MIN(Price) AS SmallestPrice\nFROM Products;\n```\n\n#### Expected Output:\n| SmallestPrice |\n| :--- |\n| 10.00 |\n\n---\n\n### 2. The `MAX()` Function\nFind the price of the most expensive product:\n\n```sql\nSELECT MAX(Price) AS LargestPrice\nFROM Products;\n```\n\n#### Expected Output:\n| LargestPrice |\n| :--- |\n| 22.00 |\n"
    },
    {
        "id": "sql-mod-15-sql-count-sum-avg",
        "title": "SQL Count(), Sum(), Avg()",
        "content": "## SQL COUNT(), SUM(), AVG() Functions\n\n### Overview\n* `COUNT()`: Returns the number of rows matching specified criteria.\n* `SUM()`: Returns the total sum of a numeric column.\n* `AVG()`: Returns the average value of a numeric column.\n\n---\n\n### 1. The `COUNT()` Function\nCount total number of products in catalog:\n\n```sql\nSELECT COUNT(ProductID) AS TotalProducts\nFROM Products;\n```\n\n#### Expected Output:\n| TotalProducts |\n| :--- |\n| 4 |\n\n---\n\n### 2. The `SUM()` Function\nCalculate total sum of all product prices:\n\n```sql\nSELECT SUM(Price) AS TotalValue\nFROM Products;\n```\n\n#### Calculation: `18.00 + 19.00 + 10.00 + 22.00 = 69.00`\n\n---\n\n### 3. The `AVG()` Function\nCalculate average product price:\n\n```sql\nSELECT AVG(Price) AS AveragePrice\nFROM Products;\n```\n\n#### Calculation: `69.00 / 4 = 17.25`\n"
    },
    {
        "id": "sql-mod-16-sql-like-wildcards",
        "title": "SQL Like & Wildcards",
        "content": "## SQL LIKE Operator & Wildcard Characters\n\n### Overview\nThe `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.\n\nThere are two main wildcards used in conjunction with the `LIKE` operator:\n* `%` - Represents zero, one, or multiple characters.\n* `_` - Represents a single character.\n\n---\n\n### LIKE Examples & Wildcard Patterns:\n\n| Pattern | Description | Example |\n| :--- | :--- | :--- |\n| `WHERE CustomerName LIKE 'a%'` | Finds values that start with \"a\" | Alfreds |\n| `WHERE CustomerName LIKE '%a'` | Finds values that end with \"a\" | Ana |\n| `WHERE CustomerName LIKE '%or%'` | Finds values containing \"or\" anywhere | Around the Horn |\n| `WHERE CustomerName LIKE '_r%'` | Finds values with \"r\" in second position | Around |\n| `WHERE CustomerName LIKE 'a_%'` | Finds values that start with \"a\" and are at least 2 chars | Ana |\n\n---\n\n### Query Example:\n```sql\nSELECT * FROM Customers\nWHERE City LIKE 'L_n_on';\n```\n\n#### Expected Output:\n| CustomerName | City | Country |\n| :--- | :--- | :--- |\n| Around the Horn | London | UK |\n"
    },
    {
        "id": "sql-mod-17-sql-in-between",
        "title": "SQL In & Between",
        "content": "## SQL IN & BETWEEN Operators\n\n### 1. The `IN` Operator\nThe `IN` operator allows you to specify multiple values in a `WHERE` clause. It is shorthand for multiple `OR` conditions.\n\n```sql\nSELECT * FROM Customers\nWHERE Country IN ('Germany', 'France', 'UK');\n```\n\n#### Shorthand Equivalency:\nThe query above is identical to:\n```sql\nSELECT * FROM Customers\nWHERE Country = 'Germany' OR Country = 'France' OR Country = 'UK';\n```\n\n---\n\n### 2. The `BETWEEN` Operator\nThe `BETWEEN` operator selects values within a given range (numbers, text, or dates). The range is **inclusive** (begins and ends at boundary values).\n\n```sql\nSELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20;\n```\n\n#### Expected Output:\n| ProductID | ProductName | Price |\n| :--- | :--- | :--- |\n| 1 | Chai Tea | 18.00 |\n| 2 | Chang Beer | 19.00 |\n| 3 | Aniseed Syrup | 10.00 |\n"
    },
    {
        "id": "sql-mod-18-sql-aliases",
        "title": "SQL Aliases",
        "content": "## SQL Aliases (AS)\n\n### Overview\nSQL aliases are used to give a table, or a column in a table, a temporary name.\n\n* Aliases are often used to make column names more readable.\n* An alias only exists for the duration of that query.\n* Created with the `AS` keyword.\n\n---\n\n### 1. Column Alias Syntax\n```sql\nSELECT CustomerID AS ID, CustomerName AS Customer\nFROM Customers;\n```\n\n#### Expected Output:\n| ID | Customer |\n| :--- | :--- |\n| 1 | Alfreds Futterkiste |\n| 2 | Ana Trujillo Emparedados |\n\n---\n\n### 2. Combining Columns into an Alias\n```sql\nSELECT CustomerName, Address + ', ' + PostalCode + ' ' + City AS FullAddress\nFROM Customers;\n```\n\n---\n\n### 3. Table Alias Syntax\nTable aliases shorten table names in multi-table queries:\n\n```sql\nSELECT c.CustomerName, o.OrderID\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerID = o.CustomerID;\n```\n"
    },
    {
        "id": "sql-mod-19-sql-joins-overview",
        "title": "SQL Joins Overview",
        "content": "## SQL Joins Overview & Types\n\n### What is a Join?\nA **JOIN** clause is used to combine rows from two or more tables based on a related column between them.\n\n---\n\n#### Relational Tables:\n#### Table 1: `Customers`\n| CustomerID | CustomerName |\n| :--- | :--- |\n| **1** | Alice |\n| **2** | Bob |\n| **3** | Charlie |\n\n#### Table 2: `Orders`\n| OrderID | CustomerID | OrderDate |\n| :--- | :--- | :--- |\n| 101 | **1** | 2026-07-01 |\n| 102 | **2** | 2026-07-02 |\n\n---\n\n### Different Types of SQL Joins:\n* **(INNER) JOIN**: Returns records that have matching values in both tables.\n* **LEFT (OUTER) JOIN**: Returns all records from the left table, and the matched records from the right table.\n* **RIGHT (OUTER) JOIN**: Returns all records from the right table, and the matched records from the left table.\n* **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table.\n"
    },
    {
        "id": "sql-mod-20-sql-inner-join",
        "title": "SQL Inner Join",
        "content": "## SQL INNER JOIN Statement\n\n### Overview\nThe `INNER JOIN` keyword selects records that have matching values in both tables.\n\n---\n\n### Query Example:\n```sql\nSELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;\n```\n\n#### Detailed Execution Walkthrough:\n* Order `101` (`CustomerID = 1`) matches Alice in `Customers`. -> **Included**\n* Order `102` (`CustomerID = 2`) matches Bob in `Customers`. -> **Included**\n* Charlie (`CustomerID = 3`) has placed no orders. -> **Excluded**\n\n#### Expected Result Output:\n| OrderID | CustomerName | OrderDate |\n| :--- | :--- | :--- |\n| 101 | Alice | 2026-07-01 |\n| 102 | Bob | 2026-07-02 |\n"
    },
    {
        "id": "sql-mod-21-sql-left-join",
        "title": "SQL Left Join",
        "content": "## SQL LEFT JOIN Statement\n\n### Overview\nThe `LEFT JOIN` keyword returns **all records from the left table (`Customers`)**, and the matched records from the right table (`Orders`).\n\nIf there is no match for a row in the right table, `NULL` is returned for right table columns.\n\n---\n\n### Query Example:\n```sql\nSELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;\n```\n\n#### Expected Result Output:\n| CustomerName | OrderID | OrderDate |\n| :--- | :--- | :--- |\n| Alice | 101 | 2026-07-01 |\n| Bob | 102 | 2026-07-02 |\n| Charlie | *NULL* | *NULL* |\n\n> [!NOTE]\n> Charlie is returned because Charlie is in the left table (`Customers`), even though Charlie has no matching orders.\n"
    },
    {
        "id": "sql-mod-22-sql-right-join",
        "title": "SQL Right Join",
        "content": "## SQL RIGHT JOIN Statement\n\n### Overview\nThe `RIGHT JOIN` keyword returns **all records from the right table (`Orders`)**, and the matched records from the left table (`Customers`).\n\nIf there is no match for a row in the left table, `NULL` is returned.\n\n---\n\n### Query Example:\n```sql\nSELECT Orders.OrderID, Customers.CustomerName\nFROM Customers\nRIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;\n```\n"
    },
    {
        "id": "sql-mod-23-sql-full-join",
        "title": "SQL Full Join",
        "content": "## SQL FULL OUTER JOIN Statement\n\n### Overview\nThe `FULL OUTER JOIN` keyword returns **all records** when there is a match in left (`Customers`) or right (`Orders`) table records.\n\nIt returns all rows from both tables, filling in `NULL` where matches do not exist on either side.\n\n---\n\n### Query Example:\n```sql\nSELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nFULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;\n```\n"
    },
    {
        "id": "sql-mod-24-sql-self-join",
        "title": "SQL Self Join",
        "content": "## SQL Self Join\n\n### Overview\nA **Self Join** is a regular join, but the table is joined with itself.\n\nIt is useful when a table contains hierarchical or self-referential relationships (such as an `Employees` table with a `ManagerID` pointing to another `EmployeeID` in the same table).\n\n---\n\n### Query Example: Find Customers in Same City\n```sql\nSELECT A.CustomerName AS Customer1, B.CustomerName AS Customer2, A.City\nFROM Customers A, Customers B\nWHERE A.CustomerID <> B.CustomerID AND A.City = B.City;\n```\n"
    },
    {
        "id": "sql-mod-25-sql-union",
        "title": "SQL Union & Union All",
        "content": "## SQL UNION & UNION ALL Operators\n\n### Overview\nThe `UNION` operator is used to combine the result-set of two or more `SELECT` statements into a single output list.\n\n### Rules for UNION:\n1. Every `SELECT` statement within `UNION` must have the **same number of columns**.\n2. Columns must have **similar data types**.\n3. Columns must be in the **same order**.\n\n---\n\n### 1. `UNION` (Removes Duplicates)\n```sql\nSELECT City FROM Customers\nUNION\nSELECT City FROM Suppliers;\n```\n\n---\n\n### 2. `UNION ALL` (Includes Duplicates)\n```sql\nSELECT City FROM Customers\nUNION ALL\nSELECT City FROM Suppliers;\n```\n"
    },
    {
        "id": "sql-mod-26-sql-group-by",
        "title": "SQL Group By",
        "content": "## SQL GROUP BY Statement\n\n### Overview\nThe `GROUP BY` statement groups rows that have the same values into summary rows, such as \"find the number of customers in each country\".\n\nThe `GROUP BY` statement is often used with aggregate functions (`COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`).\n\n---\n\n### Query Example: Count Customers Per Country\n```sql\nSELECT Country, COUNT(CustomerID) AS TotalCustomers\nFROM Customers\nGROUP BY Country;\n```\n\n#### Expected Output:\n| Country | TotalCustomers |\n| :--- | :--- |\n| Germany | 1 |\n| Mexico | 2 |\n| UK | 1 |\n| Sweden | 1 |\n"
    },
    {
        "id": "sql-mod-27-sql-having",
        "title": "SQL Having",
        "content": "## SQL HAVING Clause\n\n### Overview\nThe `HAVING` clause was added to SQL because the `WHERE` keyword cannot be used with aggregate functions.\n\nWhile `WHERE` filters individual rows before grouping, `HAVING` filters aggregated groups created by `GROUP BY`.\n\n---\n\n### Query Example:\nFind countries with **2 or more customers**:\n\n```sql\nSELECT Country, COUNT(CustomerID) AS TotalCustomers\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) >= 2;\n```\n\n#### Expected Output:\n| Country | TotalCustomers |\n| :--- | :--- |\n| Mexico | 2 |\n"
    },
    {
        "id": "sql-mod-28-sql-exists-any-all",
        "title": "SQL Subqueries: Exists, Any, All",
        "content": "## SQL Subqueries: EXISTS, ANY, ALL\n\n### 1. The `EXISTS` Operator\nThe `EXISTS` operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records.\n\n```sql\nSELECT SupplierName FROM Suppliers\nWHERE EXISTS (\n    SELECT ProductName FROM Products \n    WHERE Products.SupplierID = Suppliers.SupplierID AND Price < 20\n);\n```\n\n---\n\n### 2. The `ANY` & `ALL` Operators\n* `ANY`: Returns TRUE if ANY of the subquery values meet the condition.\n* `ALL`: Returns TRUE if ALL of the subquery values meet the condition.\n\n```sql\nSELECT ProductName FROM Products\nWHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);\n```\n"
    },
    {
        "id": "sql-mod-29-sql-case",
        "title": "SQL Case",
        "content": "## SQL CASE Statement\n\n### Overview\nThe `CASE` statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement in programming).\n\n---\n\n### Query Example:\n```sql\nSELECT OrderID, Quantity,\nCASE\n    WHEN Quantity > 30 THEN 'The quantity is greater than 30'\n    WHEN Quantity = 30 THEN 'The quantity is 30'\n    ELSE 'The quantity is under 30'\nEND AS QuantityText\nFROM OrderDetails;\n```\n"
    },
    {
        "id": "sql-mod-30-sql-stored-procedures",
        "title": "SQL Stored Procedures",
        "content": "## SQL Stored Procedures\n\n### Overview\nA stored procedure is a prepared SQL code that you can save so the code can be reused over and over again.\n\nIf you have an SQL query that you write repeatedly, save it as a stored procedure and then call it to execute it.\n\n---\n\n### Creating a Stored Procedure:\n```sql\nCREATE PROCEDURE SelectAllCustomersByCity @City nvarchar(30)\nAS\nSELECT * FROM Customers WHERE City = @City;\nGO;\n```\n\n### Executing a Stored Procedure:\n```sql\nEXEC SelectAllCustomersByCity @City = 'London';\n```\n"
    }
],
  assignment: {
    id: "sql-assignment-complete",
    title: "SQL Master Certification Exam",
    passingScore: 80,
    questions: [
      {
        id: "sql-q1",
        text: "Which SQL clause is used to filter aggregated group results after GROUP BY?",
        options: ["WHERE", "HAVING", "ORDER BY", "FILTER"],
        correctAnswer: 1
      },
      {
        id: "sql-q2",
        text: "Which keyword removes duplicate rows from a SELECT result set?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "FILTER"],
        correctAnswer: 1
      },
      {
        id: "sql-q3",
        text: "Which JOIN type returns all records from the left table and matching records from the right table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correctAnswer: 1
      },
      {
        id: "sql-q4",
        text: "What does the COUNT() aggregate function do?",
        options: ["Calculates the average of numbers", "Counts the total number of rows matching criteria", "Adds all values together", "Finds the maximum value"],
        correctAnswer: 1
      }
    ]
  }
};
