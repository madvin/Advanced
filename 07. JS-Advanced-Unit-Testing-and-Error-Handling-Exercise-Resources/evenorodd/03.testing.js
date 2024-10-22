const { expect } = require('chai');
const streamingServiceSelector = require('./streamingServiceSelector'); // Adjust the path if needed

describe("Tests for streamingServiceSelector", function() {
    describe("selectingContent()", function() {
        it("should return the correct message for valid inputs", function() {
            expect(streamingServiceSelector.selectingContent("Movie", "Netflix", "Action"))
                .to.equal("You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!");
        });

        it("should throw an error for an unsupported genre", function() {
            expect(() => streamingServiceSelector.selectingContent("Movie", "Netflix", "Fantasy"))
                .to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it("should throw an error for an unsupported type", function() {
            expect(() => streamingServiceSelector.selectingContent("Documentary", "Netflix", "Action"))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });
    });

    describe("availablePlatforms()", function() {
        it("should return the correct message for valid inputs", function() {
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 1))
                .to.equal("Other available platforms are: Netflix, Disney+.");
        });

        it("should throw an error if platforms is not an array", function() {
            expect(() => streamingServiceSelector.availablePlatforms("Netflix, HBO", 1))
                .to.throw("Invalid platform selection.");
        });

        it("should throw an error if selectedPlatformIndex is not a number", function() {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], "1"))
                .to.throw("Invalid platform selection.");
        });

        it("should throw an error if selectedPlatformIndex is out of bounds", function() {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 3))
                .to.throw("Invalid platform selection.");
        });
    });

    describe("contentRating()", function() {
        it("should return the correct message for a highly rated content", function() {
            expect(streamingServiceSelector.contentRating(120, 8))
                .to.equal("This content is highly rated (8/10) and has a runtime of 2.00 hours. Enjoy your watch!");
        });

        it("should return the correct message for a lower rated content", function() {
            expect(streamingServiceSelector.contentRating(90, 5))
                .to.equal("This content has a lower rating (5/10) and runs for 1.50 hours. You might want to check reviews first.");
        });

        it("should throw an error if runtimeInMinutes is not a positive number", function() {
            expect(() => streamingServiceSelector.contentRating(-90, 5))
                .to.throw("Invalid runtime or rating.");
        });

        it("should throw an error if viewerRating is not within 0 to 10", function() {
            expect(() => streamingServiceSelector.contentRating(120, 11))
                .to.throw("Invalid runtime or rating.");
        });

        it("should throw an error if viewerRating is not a number", function() {
            expect(() => streamingServiceSelector.contentRating(120, "High"))
                .to.throw("Invalid runtime or rating.");
        });
    });
});
