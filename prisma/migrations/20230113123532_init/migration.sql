-- CreateTable
CREATE TABLE "diaries" (
    "uuid" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "word_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "diaries_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "diaries_date_key" ON "diaries"("date");
