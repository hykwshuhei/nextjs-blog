import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react';


export const getStaticProps : GetStaticProps = async({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData
        },
    };
}

// Post ページ
export default function Post({
    postData
}: {
        postData: {
            title: string
            date: string
            contentHtml: string
        }
    }
) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>
                    {postData.title}
                </h1>
                {/* <br />
        {postData.id} */}
                {/* <br /> */}
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                {/* {postData.date} */}
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths : GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
