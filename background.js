
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

chrome.commands.onCommand.addListener((command, tab) => {
  console.log(`Command: ${command} for tab ${tab}`);

  commands_mapping = {
    'PinTab': PinUnPinCurrentTab,
    'MoveTabLeft': (current_tab) => {MoveTab(current_tab.id, current_tab.index - 1)} ,
    'MoveTabRight': (current_tab) => {MoveTab(current_tab.id, current_tab.index + 1)},
  }

  handler = commands_mapping[command]
  handler(tab)
});

