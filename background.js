
function PinUnPinCurrentTab(current_tab){
  console.log(current_tab);
  const properties = {
      "pinned": !current_tab.pinned,
  }
  chrome.tabs.update(current_tab.id, properties);

}
chrome.commands.onCommand.addListener((command, tab) => {
  console.log(`Command: ${command} for tab ${tab}`);
  PinUnPinCurrentTab(tab);
});

