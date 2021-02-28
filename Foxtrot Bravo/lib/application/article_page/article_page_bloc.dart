import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:foxtrot/domain/article/article.dart';
import 'package:foxtrot/domain/article/i_articles.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

part 'article_page_event.dart';
part 'article_page_state.dart';
part 'article_page_bloc.freezed.dart';

@injectable
class ArticlePageBloc extends Bloc<ArticlePageEvent, ArticlePageState> {
  ArticlePageBloc(this._articles) : super(ArticlePageState.initial());

  final IArticles _articles;
  @override
  Stream<ArticlePageState> mapEventToState(
    ArticlePageEvent event,
  ) async* {
    yield* event.map(initialEvent: (e) async* {
      final article = await _articles.getArticle(e.articleId);
      yield state.copyWith(article: some(article));
    });
  }
}
