const {sequelize, DataTypes} = require('./db');
const {Band, Musician, Song} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true })
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name : 'Coldplay'})
		expect(testBand.name).toBe('Coldplay')


        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: 'Slash'})
            expect(testMusician.name).toBe('Slash')


        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can add multiple musicians to a band',()=>{
        async() => {
            const greenDay = await Band.create({name: 'Green Day', genre: 'Punk Rock'})

            const billieJoe = await Musician.create({name: 'Billie Joe', instrument: 'guitar'})
            const treCool = await Musician.create({name: "Tre Cool", instrument: 'drums'})
            const mikeDirnt = await Musician.create({name: "Mike Dirnt", instrument: 'bass'})

            await greenDay.addMusician('Billie Joe')
            await greenDay.addMusician('Tre Cool')
            await greenDay.addMusician('Mike Dirnt')

            const musicians = await greenDay.getMusicians()
            
            expect(musicians.length).toBe(3);
            expect(musicians[0] instanceof Musician).toBeTruthy
        }
    })

//     Write a test to add multiple musicians to a band.  In the test:

// Band.create() to make some bands. Use the data you’ve added in previous tests you’ve created!

// Create at least 2 songs

// For one band, add both songs

// For each of the songs, use something like foundBand.getSongs() to check that they have been added correctly!

// Do the same with the bands

test('create song test',()=>{
    async() => {
        const song1 = await Song.create({title: "American Idiot", year: 2004})
        expect(song1.title).toBe("American Idiot");
        expect(song1.year).toBe(2004)

        const song2 = await Song.create({title: "Basket Case", year: 1994})
        expect(song2.title).toBe("Basket Case")
        expect(song2.year).toBe(1994)

}})

test('test to add both songs to band',()=>{
    async() => {

        const song1 = await Song.create({title: "American Idiot", year: 2004})
        const song2 = await Song.create({title: "Basket Case", year: 1994})
        const greenDay = await Band.create({name: 'Green Day', genre: 'Punk Rock'})

        await greenDay.addSong('American Idiot')
        await greenDay.addSong('Basket Case')

        const greenDaySongs = await greenDay.getSongs()

        expect(greenDaySongs[0] instanceof Song).toBeTruthy
        // expect(greenDaySongs.length).toBe(2)

    }})
})
