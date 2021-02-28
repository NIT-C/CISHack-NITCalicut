part of 'article_page_bloc.dart';

@freezed
abstract class ArticlePageState with _$ArticlePageState {
  const factory ArticlePageState({
    @required Option<Article> article,
  }) = _ArticlePageState;

  factory ArticlePageState.initial() {
    return ArticlePageState(article: none());
  }
}
