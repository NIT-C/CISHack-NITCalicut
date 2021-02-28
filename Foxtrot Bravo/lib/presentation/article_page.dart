import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_html/flutter_html.dart';

import '../application/article_page/article_page_bloc.dart';
import '../injection.dart';

class ArticlePage extends StatelessWidget {
  ArticlePage({
    @required this.articleId,
    Key key,
  }) : super(key: key);

  final String articleId;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => getIt<ArticlePageBloc>()..add(InitialEvent(articleId)),
      child: Scaffold(
          appBar: AppBar(
            title: Text(context.read<ArticlePageBloc>().state.article.fold(() => "", (a) => a.title)),
          ),
          body: BlocBuilder<ArticlePageBloc, ArticlePageState>(
            builder: (context, state) {
              if (state.article.isNone()) {
                return Center(
                  child: CircularProgressIndicator(),
                );
              } else {
                return SafeArea(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Html(
                  data: state.article.fold(() => "", (a) => a.htmlText),
                ),
                    ));
              }
            },
          )),
    );
  }
}
