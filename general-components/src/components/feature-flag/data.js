const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some Error Occured! Try again...");
  });
}

export default featureFlagsDataServiceCall;
