import mongoose, { Schema } from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const ContentSchema = new mongoose.Schema(
	{
		contentId: { type: Number, unique: true },
		route: String,
		config: { type: mongoose.Schema.Types.Mixed, default: {} },
		content: { type: mongoose.Schema.Types.Mixed, default: {} },
		styles: { type: mongoose.Schema.Types.Mixed, default: {} },
		styleKit: { type: mongoose.Schema.Types.Mixed, default: {} }
	},
	{ timestamps: true }
);

ContentSchema.plugin(AutoIncrement(mongoose), { inc_field: 'contentId' });

// const Content = mongoose.models.Content || mongoose.model('Content', ContentSchema);
const Content = mongoose.models.Content || mongoose.model('Content', ContentSchema, 'contents');
// const Content = mongoose.model('Content', ContentSchema, 'contents');

export default Content;
