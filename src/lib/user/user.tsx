import { WH_PARAMETERS_URL, TG_PARAMETERS_URL, DC_GUILDS_URL, DC_TARGET_GUILDS_URL, TG_TARGET_URL } from "../constants/constants"
import { DiscordSourceData, WebhooksParameters, TelegramParameters, TelegramChannelsList } from "../types/types";

class User{
    logged_in: boolean = false;
    webhooks_parameters: WebhooksParameters = {};
    telegram_parameters: TelegramParameters = {};
    telegram_target_channels: TelegramChannelsList = [];
    discord_source_channels: DiscordSourceData = [];
    discord_target_channels: DiscordSourceData = [];

    constructor(){
        this.logged_in = true;
    }

    async get_webhooks_parameters() {
        if (this.logged_in) {
            try {
                const response = await fetch(WH_PARAMETERS_URL);
                const json = await response.json();
                console.log(json);
                this.webhooks_parameters = json;
            } catch (error) {
                console.error("Error fetching webhooks parameters:", error);
            }
        } else {
            alert("Log in first!");
        }
    }

    async get_telegram_parameters(){
        if (this.logged_in) {
            const result = await fetch(TG_PARAMETERS_URL)
            result.json().then(json => {
                this.telegram_parameters = json;
            })
        } else {
            alert("Log in first!");
        }
    }

    async get_discord_source_channels() {
        if (this.logged_in) {
            try {
                const response = await fetch(DC_GUILDS_URL);
                const json = await response.json();
                console.log(json);
                this.discord_source_channels = json;
            } catch (error) {
                console.error("Error fetching discord source channels:", error);
            }
        } else {
            alert("Log in first!");
        }
    }

    async get_telegram_source_channels() {
        if (this.logged_in) {
            try {
                const response = await fetch(TG_TARGET_URL);
                const json = await response.json();
                console.log(json);
                this.telegram_target_channels = json;
            } catch (error) {
                console.error("Error fetching telegram source channels:", error);
            }
        } else {
            alert("Log in first!");
        }
    }

    async get_discord_target_channels() {
        if (this.logged_in) {
            try {
                const response = await fetch(DC_TARGET_GUILDS_URL);
                const json = await response.json();
                console.log(json);
                this.discord_target_channels = json;
                for (var server_index in this.discord_target_channels) {
                    this.discord_target_channels[server_index].channels = Array();
                    for (var category of this.discord_target_channels[server_index].categories){
                        this.discord_target_channels[server_index].channels = this.discord_target_channels[server_index].channels.concat(category.channels);
                    }
                }
            } catch (error) {
                console.error("Error fetching discord target channels:", error);
            }
        } else {
            alert("Log in first!");
        }
    }

}

export default new User();
