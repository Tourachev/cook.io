USE cookio-app

CREATE TABLE
IF NOT EXISTS UserInfo
(
    userID INT,
    username VARCHAR(40),
    email VARCHAR(40),
    PRIMARY KEY (userID)
)

CREATE TABLE
IF NOT EXISTS Credentials
(
    userID INT,
    pword VARCHAR(40),
    FOREIGN KEY (userID) 
    REFERENCES UserInfo (userID)
    ON
DELETE CASCADE ON
UPDATE CASCADE
);

CREATE TABLE
IF NOT EXISTS Recipes
(
    recipeID INT,
    recipeName VARCHAR(40),
    recipeInstruction LONGTEXT,
    recipeTimeToCook INT,
    PRIMARY KEY (recipeID)
);

CREATE TABLE
IF NOT EXISTS Ingredient
(
    ingedientID INT,
    ingredientName VARCHAR(40),
  ADD measurement VARCHAR(40)
    PRIMARY KEY (ingedientID)
);

CREATE TABLE
IF NOT EXISTS IngredientsInRecipes
(
    ingedientID INT,
    recipeID INT,
    ingredientQuantity INT
);

CREATE TABLE
IF NOT EXISTS Ratings
(
    recipeID INT,
    userID INT,
    rating INT
);

CREATE TABLE
IF NOT EXISTS Comments
(
    recipeID INT,
    userID INT,
    commentID INT,
    comment LONGTEXT,
    PRIMARY KEY(commentID)
);




