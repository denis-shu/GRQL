import reportModel from './models/report';

const resolvers = {
    Query: {
        allReports: (root, {
            searchTerm
        }) => {
            if (searchTerm !== '') {
                return reportModel.find({
                    $text: {
                        $search: searchTerm
                    }
                }).sort({
                    voteCount: 'desc'
                });
            } else
                return reportModel.find().sort({
                    voteCount: 'desc'
                });
        },
        report: (root, {
            id
        }) => {          
            return reportModel.findOne({
                id: id
            });
        }
    },
    Mutation: {
        upvote: (root, {
            id
        }) => {           
            return reportModel.findOneAndUpdate({
                id: id
            }, {
                $inc: {
                    "voteCount": 1
                }
            }, {
                returnNewDocument: true
            });
        },
        downvote: (root, {
            id
        }) => {
            return reportModel.findOneAndUpdate({
                id: id
            }, {
                $inc: {
                    "voteCount": -1
                }
            }, {
                returnNewDocument: true
            });
        },
        addReport: (root, {
            title,
            author,
            description,
            topic,
            url
        }) => {
            const report = new reportModel({
                title: title,
                author: author,
                description: description,
                topic: topic,
                url: url
            });
            return report.save();
        }
    }
}

export default resolvers;