/**
 * Created by reuvec on 9/17/2016.
 */
let TALKS = [{
      title: "talk 1",
      speaker: "speaker 1",
      watch: 'https://www.youtube.com/watch?v=Y4A2pMn5iuA',
      rate: 1
    },
      {
        title: "talk 2",
        speaker: "speaker 2",
        watch: 'https://www.youtube.com/watch?v=Y4A2pMn5iuA',
        rate: 2
      },
      {
        title: "talk 3",
        speaker: "speaker 3",
        watch: 'https://www.youtube.com/watch?v=Y4A2pMn5iuA',
        rate: 3
      },
      {
        title: "talk 4",
        speaker: "speaker 4",
        watch: 'https://www.youtube.com/watch?v=Y4A2pMn5iuA',
        rate: 4
      }];

export class TalksAppBackendService {
  fetchTalks(query: string) {
    if(!query) {
      return TALKS;
    }
    return TALKS.filter((talk) => talk.title.indexOf(query) > -1);
  }
}
