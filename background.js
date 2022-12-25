
function PinUnPinCurrentTab(current_tab){
  console.log(current_tab);
  const properties = {
      "pinned": !current_tab.pinned,
  }
  chrome.tabs.update(current_tab.id, properties);
}

function MoveTab(tabId, new_index){
  moveProperties = {
    'index': new_index
  }
  chrome.tabs.move(tabId, moveProperties);
}

function GeneralListener(command, current_tab) {
  console.log(`Command: ${command} for tab ${tab}`);

  commands_mapping = {
    'PinTab': PinUnPinCurrentTab,
    'MoveTabLeft': (tab) => {MoveTab(tab.id, tab.index - 1)} ,
    'MoveTabRight': (tab) => {MoveTab(tab.id, tab.index + 1)},
  }

  handler = commands_mapping[command]
  handler(current_tab)
}



chrome.commands.onCommand.addListener(GeneralListener);

