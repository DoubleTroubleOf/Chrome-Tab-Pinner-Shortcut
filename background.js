
function PinUnPinCurrentTab(currentTab){
  console.log(currentTab);
  const properties = {
      "pinned": !currentTab.pinned,
  }
  chrome.tabs.update(currentTab.id, properties);
}

function MoveTab(tabId, new_index){
  moveProperties = {
    'index': new_index
  }
  chrome.tabs.move(tabId, moveProperties);
}

function GeneralListener(command, currentTab) {
  console.log(`Command: ${command} for tab ${currentTab}`);

  commands_mapping = {
    'PinTab': PinUnPinCurrentTab,
    'MoveTabLeft': (tab) => {MoveTab(tab.id, tab.index - 1)} ,
    'MoveTabRight': (tab) => {MoveTab(tab.id, tab.index + 1)},
  }

  handler = commands_mapping[command]
  handler(currentTab)
}



chrome.commands.onCommand.addListener(GeneralListener);

