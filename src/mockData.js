export const emptySet = {
    currentQuery: 'default',
    listData: {},
    totalItems: 0,
    activeSort: 'relevance',
}

export const set1 = {
    items: [{
        volumeInfo: {
            title: 'Testament to Youth',
            authors: ['Vera Brittain'],
            description: `This classic memoir of the First World War is now a major motion picture starring Alicia Vikander and Kit Harington. Includes an afterword by Kate Mosse OBE. In 1914 Vera Brittain was 20, and as war was declared she was preparing to study at Oxford. Four years later her life - and the life of her whole generation - had changed in a way that would have been unimaginable in the tranquil pre-war era. TESTAMENT OF YOUTH, one of the most famous autobiographies of the First World War, is Brittain's account of how she survived those agonising years; how she lost the man she loved; how she nursed the wounded and how she emerged into an altered world. A passionate record of a lost generation, it made Vera Brittain one of the best-loved writers of her time, and has lost none of its power to shock, move and enthral readers since its first publication in 1933.`,
            imageLinks: {
                smallThumbnail: 'http://books.google.com/books/content?id=YSI4AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
            }
        }
    }],
    totalItems: 1681
}

export const set2 = {
    items: [{
        volumeInfo: {
            title: 'Hoot',
            authors: ['Carl Hiaasen'],
            description: `Roy, who is new to his small Florida community, befriends a mysterious boy who introduces him to potty-trained alligators, burrowing owls, and sparkly-tailed poisonous snakes. A Newbery Honor Book, ALA Notable Book, & ALA Best Book for Young Adults. Reissue.`,
            imageLinks: {
                smallThumbnail: 'http://books.google.com/books/content?id=BTDSfx5bunwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
            }
        }
    }],
    totalItems: 1681
};

export const set3 = {
    items: [{
        volumeInfo: {
            title: 'Testament to Youth',
            authors: null,
            description: '',
            imageLinks: {
                smallThumbnail: 'http://books.google.com/books/content?id=YSI4AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
            }
        }
    }],
    totalItems: 1681
}

export const beforeSearch = {
    query: '',
    searched: false
}

export const afterSearch = {
    query: 'harry',
    searched: true
}