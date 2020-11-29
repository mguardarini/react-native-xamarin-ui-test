import {TalksProps} from '../../features/home/talk-service/TalksProps';

function getAllTalks () {
    return fetch('https://my-json-server.typicode.com/mguardarini/talksjsonbody/talks')
    .then((response: { json: () => TalksProps; }) => response.json())
    .then((responseJson: TalksProps) => {
        return responseJson;
    })
    .catch((error: any) => {
      return error;
    });
}
export default {
    getAllTalks
}