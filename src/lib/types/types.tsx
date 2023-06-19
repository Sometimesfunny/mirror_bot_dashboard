export type ChannelData = {
    name: string;
    id: number;
} | DiscordChannel;

export type ServerData = {
    name: string;
    id: number;
    channels: Array<ChannelData>;
};

export type OneWebhookParameters = {
    mirror_name?: string;
    mirror_to_ids?: string[];
    mirror_mentions?: boolean;
    hide_mentions_authors?: string[];
    whitelist_enabled?: boolean;
    whitelisted_authors?: string[];
    delay_enabled?: boolean;
    delay?: number;
    webhook_urls?: string[];
    push_buttons?: boolean;
    hide_messages?: boolean;
    button_message_text?: string;
    tg_enabled?: boolean;
    tg_mirror_to_ids?: string[];
    mention_channel_in_tg?: boolean;
    mention_author_in_tg?: boolean;
    keywords_blacklist_enabled?: boolean;
    keywords_blacklist?: string[];
};
  
export type WebhooksParameters = Record<string, OneWebhookParameters>;

export type OneTelegramParameters = {
    mirror_name?: string;
    mirror_to_tg_ids?: string[];
    whitelist_enabled?: boolean;
    whitelisted_authors?: string[];
    discord_enabled?: boolean;
    tg_enabled?: boolean;
    mirror_to_discord_ids?: string[];
    webhook_urls?: string[];
    keywords_filter_enabled?: boolean;
    keywords?: string[];
    keywords_blacklist_enabled?: boolean;
    keywords_blacklist?: string[];
    mention_channel_in_tg?: boolean;
    mention_author_in_tg?: boolean;
};
  
export type TelegramParameters = Record<string, OneTelegramParameters>;

export type TelegramChat = {
    id: string | number;
    name: string;
  };
  
export type TelegramChannelsList = TelegramChat[];
  

export type DiscordChannel = {
    id: number;
    name: string;
    position: number;
}

type DiscordCategory = {
    id: string;
    name: string;
    channels: Array<DiscordChannel>;
    position: number;
}

type DiscordServer = {
    id: string;
    name: string;
    categories: Array<DiscordCategory>;
    channels: Array<DiscordChannel>;
}

export type DiscordSourceData = Array<DiscordServer>;
