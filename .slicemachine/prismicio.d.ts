// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for contatos documents */
type ContatosDocumentData = Record<string, never>;
/**
 * contatos document from Prismic
 *
 * - **API ID**: `contatos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContatosDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContatosDocumentData>, "contatos", Lang>;
/** Content for teste documents */
type HomeDocumentData = Record<string, never>;
/**
 * teste document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * title field in *homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Titulo Principal
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * span field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: paragrafo Call to Action
     * - **API ID Path**: homepage.span
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    span: prismicT.RichTextField;
    /**
     * banner field in *homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * title_projects field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Titulo do projeto
     * - **API ID Path**: homepage.title_projects
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_projects: prismicT.RichTextField;
    /**
     * title_services field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Titulo Serviços
     * - **API ID Path**: homepage.title_services
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_services: prismicT.RichTextField;
    /**
     * subTitle_firts field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.subtitle_firts
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_firts: prismicT.RichTextField;
    /**
     * description_first field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Primeira descrição
     * - **API ID Path**: homepage.description_first
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_first: prismicT.RichTextField;
    /**
     * subTitle_second field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: segundo subtítulo
     * - **API ID Path**: homepage.subtitle_second
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_second: prismicT.RichTextField;
    /**
     * description_second field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Se
     * - **API ID Path**: homepage.description_second
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_second: prismicT.RichTextField;
    /**
     * subTitle_third field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.subtitle_third
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle_third: prismicT.RichTextField;
    /**
     * description_third field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Terceira descrição
     * - **API ID Path**: homepage.description_third
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_third: prismicT.RichTextField;
    /**
     * banner_footer field in *homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.banner_footer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner_footer: prismicT.ImageField<never>;
    /**
     * btncontact field in *homepage*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Botão entre em contato (whatsapp)
     * - **API ID Path**: homepage.btncontact
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    btncontact: prismicT.LinkField;
}
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for project documents */
interface ProjectDocumentData {
    /**
     * imageProject field in *project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.imageproject
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    imageproject: prismicT.ImageField<never>;
    /**
     * titleProject field in *project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Titulo do projeto
     * - **API ID Path**: project.titleproject
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titleproject: prismicT.RichTextField;
    /**
     * descriptionProject field in *project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.descriptionproject
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    descriptionproject: prismicT.RichTextField;
    /**
     * dateProject field in *project*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: Data em que o projeto foi realizado
     * - **API ID Path**: project.dateproject
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    dateproject: prismicT.TimestampField;
}
/**
 * project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for sobre documents */
interface SobreDocumentData {
    /**
     * title field in *sobre*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre.tite
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    tite: prismicT.TitleField;
    /**
     * description field in *sobre*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Descrição quem somos
     * - **API ID Path**: sobre.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * banner field in *sobre*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
}
/**
 * sobre document from Prismic
 *
 * - **API ID**: `sobre`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SobreDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SobreDocumentData>, "sobre", Lang>;
export type AllDocumentTypes = ContatosDocument | HomeDocument | HomepageDocument | ProjectDocument | SobreDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ContatosDocumentData, ContatosDocument, HomeDocumentData, HomeDocument, HomepageDocumentData, HomepageDocument, ProjectDocumentData, ProjectDocument, SobreDocumentData, SobreDocument, AllDocumentTypes };
    }
}
