export class Tweet {
    created_at: string;
    entities: object;
    favorite_count: number;
    favorited: boolean;
    id: number;
    id_str: string;
    in_reply_to_screen_name: string;
    in_reply_to_status_id: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    is_quote_status: boolean;
    lang: string;
    metadata: object;
    possibly_sensitive: boolean
    quoted_status: object;
    quoted_status_id: number;
    quoted_status_id_str: string;
    retweet_count: number;
    retweeted: boolean;
    source: string;
    text: string;
    truncated: boolean;
    user: object
}