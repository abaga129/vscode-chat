import * as microsoftTeams from "@microsoft/teams-js";
import { IChatProvider } from "../types";

// microsoftTeams.authentication.authenticate();

export class TeamsChatProvider implements IChatProvider {
  getToken: () => Promise<string>;
  validateToken: (
    token: string
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").CurrentUser>;
  fetchUsers: () => Promise<
    import("/Users/arjun/vscode-rubberduck/src/types").Users
  >;
  fetchUserInfo: (
    userId: string
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").User>;
  fetchChannels: (
    users: import("/Users/arjun/vscode-rubberduck/src/types").Users
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").Channel[]>;
  fetchChannelInfo: (
    channel: import("/Users/arjun/vscode-rubberduck/src/types").Channel
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").Channel>;
  loadChannelHistory: (
    channelId: string
  ) => Promise<
    import("/Users/arjun/vscode-rubberduck/src/types").ChannelMessages
  >;
  getUserPrefs: () => Promise<
    import("/Users/arjun/vscode-rubberduck/src/types").UserPreferences
  >;
  markChannel: (
    channel: import("/Users/arjun/vscode-rubberduck/src/types").Channel,
    ts: string
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").Channel>;
  fetchThreadReplies: (
    channelId: string,
    ts: string
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").Message>;
  sendMessage: (
    text: string,
    currentUserId: string,
    channelId: string
  ) => Promise<void>;
  sendThreadReply: (
    text: string,
    currentUserId: string,
    channelId: string,
    parentTimestamp: string
  ) => Promise<void>;
  connect: () => Promise<
    import("/Users/arjun/vscode-rubberduck/src/types").CurrentUser
  >;
  isConnected: () => boolean;
  subscribePresence: (
    users: import("/Users/arjun/vscode-rubberduck/src/types").Users
  ) => void;
  createIMChannel: (
    user: import("/Users/arjun/vscode-rubberduck/src/types").User
  ) => Promise<import("/Users/arjun/vscode-rubberduck/src/types").Channel>;
  destroy: () => Promise<void>;
}
