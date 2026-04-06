-- CreateTable
CREATE TABLE "ControlCalidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qualityScore" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
