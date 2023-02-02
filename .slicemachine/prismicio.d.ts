// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for home documents */
interface HomeDocumentData {
    /**
     * title field in *home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Titulo Principal
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * span field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Texto CTA
     * - **API ID Path**: home.span
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    span: prismicT.RichTextField;
    /**
     * banner field in *home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * title_projects field in *home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Titulo Projetos
     * - **API ID Path**: home.title_projects
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_projects: prismicT.TitleField;
    /**
     * title_services field in *home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Titulo Serviços
     * - **API ID Path**: home.title_services
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_services: prismicT.TitleField;
    /**
     * subTitle_firts field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.subtitle_firts
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_firts: prismicT.RichTextField;
    /**
     * description_first field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Primeira descrição
     * - **API ID Path**: home.description_first
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_first: prismicT.RichTextField;
    /**
     * subTitle_second field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Segundo titulo serviços
     * - **API ID Path**: home.subtitle_second
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_second: prismicT.RichTextField;
    /**
     * description_second field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Segunda descrição serviços
     * - **API ID Path**: home.description_second
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_second: prismicT.RichTextField;
    /**
     * subTitle_third field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Terceiro Titulo Serviços
     * - **API ID Path**: home.subtitle_third
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_third: prismicT.RichTextField;
    /**
     * description_third field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Terceira descrição
     * - **API ID Path**: home.description_third
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_third: prismicT.RichTextField;
    /**
     * banner_footer field in *home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.banner_footer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner_footer: prismicT.ImageField<never>;
}
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocument, AllDocumentTypes };
    }
}