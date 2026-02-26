import { Schema, Document, model, Types } from "mongoose";
import { Addresses, Profile, SocialLinks } from "../types/profile.types";

export interface ProfileDocument extends Profile, Document { }

const socialLinksSchema = new Schema<SocialLinks>({
    twitter: { type: String },
    linkedin: { type: String },
    github: { type: String },
    instagram: { type: String },
}, { _id: false });


const addressSchema = new Schema<Addresses>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
}, { _id: false });


const profileSchema = new Schema<ProfileDocument>({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "User"
    },
    bio: { type: String },
    profileImageUrl: { type: String },
    phoneNo: { type: String },
    socialLinks: {
        type: socialLinksSchema,
        default: {}
    },
    addresses: {
        type: [addressSchema],
        default: []
    },
}, { timestamps: true });

const ProfileModel = model<ProfileDocument>("Profile", profileSchema);

export default ProfileModel;
